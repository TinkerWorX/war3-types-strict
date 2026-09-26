import * as fs from "fs";
import * as path from "path";

type Category = "types" | "globals" | "natives" | "functions";
type SourceName = "blizzard.j" | "common.j" | "common.ai";

type ParameterDefinition = {
    description: null;
    name: string;
    type: string;
    isNullable: boolean;
};

type TypeDefinition = {
    description: null;
    name: string;
    extends: string;
    source: SourceName;
};

type GlobalDefinition = {
    name: string;
    description: null;
    isConstant: boolean;
    type: string;
    isArray: boolean;
    value: string | null;
    isNullable: boolean;
    source: SourceName;
};

type CallableDefinition = {
    name: string;
    description: null;
    takes: ParameterDefinition[];
    returns: string;
    isNullable: boolean;
    source: SourceName;
};

type Definition = TypeDefinition | GlobalDefinition | CallableDefinition;

type ParsedDefinition = {
    category: Category;
    definition: Definition;
};

const categories: Category[] = ["types", "globals", "natives", "functions"];
const sources: SourceName[] = ["blizzard.j", "common.j", "common.ai"];
const versionNamePattern = /^\d+(?:\.\d+)+$/;

function compareVersions(left: string, right: string): number {
    const leftParts = left.split(".").map(Number);
    const rightParts = right.split(".").map(Number);
    const length = Math.max(leftParts.length, rightParts.length);

    for (let index = 0; index < length; index++) {
        const difference = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
        if (difference !== 0) {
            return difference;
        }
    }

    return 0;
}

function toTypeScriptType(jassType: string): string {
    switch (jassType) {
        case "integer":
        case "real":
            return "number";
        case "nothing":
            return "void";
        case "code":
            return "() => void";
        default:
            return jassType;
    }
}

function parseParameters(value: string): ParameterDefinition[] {
    if (value.trim() === "nothing") {
        return [];
    }

    return value.split(",").map((parameter) => {
        const match = parameter.trim().match(/^(?<type>\w+)\s+(?<name>\w+)$/);
        if (!match?.groups) {
            throw new Error(`Unable to parse parameter declaration: ${parameter}`);
        }

        return {
            description: null,
            name: match.groups.name,
            type: toTypeScriptType(match.groups.type),
            isNullable: false,
        };
    });
}

function parseSource(sourcePath: string, source: SourceName): ParsedDefinition[] {
    const definitions: ParsedDefinition[] = [];
    let inGlobals = false;

    for (const rawLine of fs.readFileSync(sourcePath, "utf8").split(/\r?\n/)) {
        const line = rawLine.replace(/\/\/.*$/, "").trim();
        if (!line) {
            continue;
        }

        if (/^globals\b/.test(line)) {
            inGlobals = true;
            continue;
        }

        if (/^endglobals\b/.test(line)) {
            inGlobals = false;
            continue;
        }

        const typeMatch = line.match(/^type\s+(?<name>\w+)\s+extends\s+(?<extends>\w+)$/);
        if (typeMatch?.groups) {
            definitions.push({
                category: "types",
                definition: {
                    description: null,
                    name: typeMatch.groups.name,
                    extends: typeMatch.groups.extends,
                    source,
                },
            });
            continue;
        }

        const signatureMatch = line.match(
            /^(?:(?<constant>constant)\s+)?(?<kind>native|function)\s+(?<name>\w+)\s+takes\s+(?<takes>.+)\s+returns\s+(?<returns>\w+)$/,
        );
        if (signatureMatch?.groups) {
            if (signatureMatch.groups.constant && signatureMatch.groups.kind !== "native") {
                throw new Error(`Unsupported constant function declaration: ${line}`);
            }

            const returns = toTypeScriptType(signatureMatch.groups.returns);
            definitions.push({
                category: signatureMatch.groups.kind === "native" ? "natives" : "functions",
                definition: {
                    name: signatureMatch.groups.name,
                    description: null,
                    takes: parseParameters(signatureMatch.groups.takes),
                    returns,
                    isNullable: !["number", "boolean", "void"].includes(returns),
                    source,
                },
            });
            continue;
        }

        if (!inGlobals) {
            continue;
        }

        const globalMatch = line.match(
            /^(?<constant>constant\s+)?(?<type>\w+)(?:\s+(?<array>array))?\s+(?<name>\w+)(?:\s*=\s*(?<value>.*))?$/,
        );
        if (!globalMatch?.groups) {
            continue;
        }

        const value = globalMatch.groups.value?.trim() || null;
        definitions.push({
            category: "globals",
            definition: {
                name: globalMatch.groups.name,
                description: null,
                isConstant: Boolean(globalMatch.groups.constant),
                type: toTypeScriptType(globalMatch.groups.type),
                isArray: Boolean(globalMatch.groups.array),
                value,
                isNullable: value === null || value === "null",
                source,
            },
        });
    }

    return definitions;
}

function loadDefinitionNames(versionDirectory: string): Map<Category, Set<string>> {
    const names = new Map<Category, Set<string>>();

    for (const category of categories) {
        const definitionsDirectory = path.join(versionDirectory, category);
        const categoryNames = new Set<string>();

        if (fs.existsSync(definitionsDirectory)) {
            for (const file of fs.readdirSync(definitionsDirectory)) {
                if (!file.endsWith(".json")) {
                    continue;
                }

                const definition = JSON.parse(
                    fs.readFileSync(path.join(definitionsDirectory, file), "utf8"),
                ) as { name?: string };
                categoryNames.add(definition.name ?? path.basename(file, ".json"));
            }
        }

        names.set(category, categoryNames);
    }

    return names;
}

function findOlderVersions(repositoryRoot: string, targetVersion: string): string[] {
    return fs.readdirSync(repositoryRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && versionNamePattern.test(entry.name))
        .map((entry) => entry.name)
        .filter((version) => compareVersions(version, targetVersion) < 0)
        .sort(compareVersions);
}

function collectOlderDefinitionNames(
    repositoryRoot: string,
    olderVersions: string[],
): Map<Category, Set<string>> {
    const names = new Map<Category, Set<string>>();
    for (const category of categories) {
        names.set(category, new Set<string>());
    }

    for (const version of olderVersions) {
        const versionNames = loadDefinitionNames(path.join(repositoryRoot, version));
        for (const category of categories) {
            for (const name of versionNames.get(category) ?? []) {
                names.get(category)?.add(name);
            }
        }
    }

    return names;
}

function writeDefinitions(
    repositoryRoot: string,
    targetVersion: string,
    definitions: ParsedDefinition[],
): void {
    for (const { category, definition } of definitions) {
        const destinationDirectory = path.join(repositoryRoot, targetVersion, category);
        const destination = path.join(destinationDirectory, `${definition.name}.json`);

        if (fs.existsSync(destination)) {
            throw new Error(`Refusing to overwrite existing definition: ${destination}`);
        }

        fs.mkdirSync(destinationDirectory, { recursive: true });
        fs.writeFileSync(destination, `${JSON.stringify(definition, null, 2)}\n`);
    }
}

function main(): void {
    const [targetVersion, ...options] = process.argv.slice(2);
    if (!targetVersion) {
        throw new Error("Usage: npm run compare -- <target-version> [--write]");
    }

    if (!versionNamePattern.test(targetVersion)) {
        throw new Error(`Target version must use numeric dotted segments: ${targetVersion}`);
    }

    if (options.some((option) => option !== "--write")) {
        throw new Error(`Unsupported option: ${options.find((option) => option !== "--write")}`);
    }

    const repositoryRoot = __dirname;
    const targetDirectory = path.join(repositoryRoot, targetVersion);
    if (!fs.existsSync(targetDirectory)) {
        throw new Error(`Target version directory does not exist: ${targetDirectory}`);
    }

    const olderVersions = findOlderVersions(repositoryRoot, targetVersion);
    if (olderVersions.length === 0) {
        throw new Error(`No older version directories found for ${targetVersion}`);
    }

    const olderNames = collectOlderDefinitionNames(repositoryRoot, olderVersions);
    const targetNames = loadDefinitionNames(targetDirectory);
    const newComparedToOlder: ParsedDefinition[] = [];

    for (const source of sources) {
        const sourcePath = path.join(targetDirectory, "sources", source);
        if (!fs.existsSync(sourcePath)) {
            throw new Error(`Required source file does not exist: ${sourcePath}`);
        }

        for (const parsed of parseSource(sourcePath, source)) {
            if (!olderNames.get(parsed.category)?.has(parsed.definition.name)) {
                newComparedToOlder.push(parsed);
            }
        }
    }

    const missingTargetDefinitions = newComparedToOlder.filter(
        (parsed) => !targetNames.get(parsed.category)?.has(parsed.definition.name),
    );

    console.log(`Target version: ${targetVersion}`);
    console.log(`Older versions: ${olderVersions.join(", ")}`);
    console.log(`New declarations versus older definitions: ${newComparedToOlder.length}`);
    console.log(`Definitions missing from ${targetVersion}: ${missingTargetDefinitions.length}`);

    for (const category of categories) {
        const definitions = missingTargetDefinitions.filter(
            (parsed) => parsed.category === category,
        );
        if (definitions.length > 0) {
            console.log(`${category}: ${definitions.map((parsed) => parsed.definition.name).join(", ")}`);
        }
    }

    if (options.includes("--write") && missingTargetDefinitions.length > 0) {
        writeDefinitions(repositoryRoot, targetVersion, missingTargetDefinitions);
        console.log(`Wrote ${missingTargetDefinitions.length} definitions.`);
    }
}

main();
