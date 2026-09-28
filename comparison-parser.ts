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

type DefinitionMaps = Map<Category, Map<string, Definition>>;

type ChangedDefinition = {
    category: Category;
    previous: Definition;
    current: Definition;
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

function createDefinitionMaps(): DefinitionMaps {
    return new Map(categories.map((category) => [category, new Map<string, Definition>()]));
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

function normalizeGlobalValue(value: string | null | undefined): string | null {
    const normalized = value?.trim() || null;
    if (!normalized) {
        return null;
    }

    const rawcode = normalized.match(/^'(?<value>.{4})'$/);
    return rawcode?.groups ? `FourCC(${rawcode.groups.value})` : normalized;
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

        const value = normalizeGlobalValue(globalMatch.groups.value);
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

function loadDefinitions(versionDirectory: string): DefinitionMaps {
    const definitions = createDefinitionMaps();

    for (const category of categories) {
        const definitionsDirectory = path.join(versionDirectory, category);
        if (!fs.existsSync(definitionsDirectory)) {
            continue;
        }

        for (const file of fs.readdirSync(definitionsDirectory)) {
            if (!file.endsWith(".json")) {
                continue;
            }

            const definition = JSON.parse(
                fs.readFileSync(path.join(definitionsDirectory, file), "utf8"),
            ) as Definition;
            definitions.get(category)?.set(definition.name, definition);
        }
    }

    return definitions;
}

function findOlderVersions(repositoryRoot: string, targetVersion: string): string[] {
    return fs.readdirSync(repositoryRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && versionNamePattern.test(entry.name))
        .map((entry) => entry.name)
        .filter((version) => compareVersions(version, targetVersion) < 0)
        .sort(compareVersions);
}

function applyVersionRemovals(versionDirectory: string, definitions: DefinitionMaps): void {
    for (const category of categories) {
        const removalsDirectory = path.join(versionDirectory, "removals", category);
        if (!fs.existsSync(removalsDirectory)) {
            continue;
        }

        for (const entry of fs.readdirSync(removalsDirectory, { withFileTypes: true })) {
            if (entry.isFile() && entry.name.endsWith(".json")) {
                definitions.get(category)?.delete(path.basename(entry.name, ".json"));
            }
        }
    }
}

function collectEffectiveOlderDefinitions(
    repositoryRoot: string,
    olderVersions: string[],
): DefinitionMaps {
    const definitions = createDefinitionMaps();

    for (const version of olderVersions) {
        const versionDefinitions = loadDefinitions(path.join(repositoryRoot, version));
        for (const category of categories) {
            for (const [name, definition] of versionDefinitions.get(category) ?? []) {
                definitions.get(category)?.set(name, definition);
            }
        }
        applyVersionRemovals(path.join(repositoryRoot, version), definitions);
    }

    return definitions;
}

function definitionsMatch(category: Category, left: Definition, right: Definition): boolean {
    if (left.name !== right.name || left.source !== right.source) {
        return false;
    }

    if (category === "types") {
        return (left as TypeDefinition).extends === (right as TypeDefinition).extends;
    }

    if (category === "globals") {
        const previous = left as GlobalDefinition;
        const current = right as GlobalDefinition;
        return previous.isConstant === current.isConstant
            && previous.type === current.type
            && previous.isArray === current.isArray
            && normalizeGlobalValue(previous.value) === normalizeGlobalValue(current.value);
    }

    const previous = left as CallableDefinition;
    const current = right as CallableDefinition;
    return previous.returns === current.returns
        && previous.takes.length === current.takes.length
        && previous.takes.every((parameter, index) => (
            parameter.name === current.takes[index].name
            && parameter.type === current.takes[index].type
        ));
}

function addSourceDefinitions(
    sourceDefinitions: DefinitionMaps,
    definitions: ParsedDefinition[],
): void {
    for (const { category, definition } of definitions) {
        const categoryDefinitions = sourceDefinitions.get(category);
        if (categoryDefinitions?.has(definition.name)) {
            throw new Error(`Duplicate ${category} declaration: ${definition.name}`);
        }

        categoryDefinitions?.set(definition.name, definition);
    }
}

function getDefinitionsByCategory(
    definitions: ParsedDefinition[],
    category: Category,
): ParsedDefinition[] {
    return definitions.filter((definition) => definition.category === category);
}

function writeDefinition(
    destinationDirectory: string,
    definition: Definition,
    overwrite: boolean,
): void {
    fs.mkdirSync(destinationDirectory, { recursive: true });
    const destination = path.join(destinationDirectory, `${definition.name}.json`);
    if (fs.existsSync(destination) && !overwrite) {
        return;
    }

    fs.writeFileSync(destination, `${JSON.stringify(definition, null, 2)}\n`);
}

function writePrimaryDefinitions(
    targetDirectory: string,
    additions: ParsedDefinition[],
    changes: ChangedDefinition[],
    targetDefinitions: DefinitionMaps,
    unchangedDefinitions: ParsedDefinition[],
    targetDefinitionsAbsentFromSource: ParsedDefinition[],
): { written: number; removed: number } {
    let written = 0;
    let removed = 0;

    for (const { category, definition } of additions) {
        const targetDefinition = targetDefinitions.get(category)?.get(definition.name);
        if (targetDefinition && definitionsMatch(category, targetDefinition, definition)) {
            continue;
        }

        writeDefinition(path.join(targetDirectory, category), definition, true);
        written++;
    }

    for (const { category, current } of changes) {
        const targetDefinition = targetDefinitions.get(category)?.get(current.name);
        if (targetDefinition && definitionsMatch(category, targetDefinition, current)) {
            continue;
        }

        writeDefinition(path.join(targetDirectory, category), current, true);
        written++;
    }

    for (const { category, definition } of unchangedDefinitions) {
        const targetDefinition = targetDefinitions.get(category)?.get(definition.name);
        if (!targetDefinition || definitionsMatch(category, targetDefinition, definition)) {
            continue;
        }

        const targetPath = path.join(targetDirectory, category, `${definition.name}.json`);
        if (fs.existsSync(targetPath)) {
            fs.unlinkSync(targetPath);
            removed++;
        }
    }

    for (const { category, definition } of targetDefinitionsAbsentFromSource) {
        const targetPath = path.join(targetDirectory, category, `${definition.name}.json`);
        if (fs.existsSync(targetPath)) {
            fs.unlinkSync(targetPath);
            removed++;
        }
    }

    return { written, removed };
}

function writeTrackingDefinitions(
    targetDirectory: string,
    trackingDirectory: "removals" | "changes",
    definitions: Array<{ category: Category; definition: Definition }>,
): { written: number; removed: number } {
    const definitionsByCategory = new Map<Category, Map<string, Definition>>(
        categories.map((category) => [category, new Map<string, Definition>()]),
    );
    for (const { category, definition } of definitions) {
        definitionsByCategory.get(category)?.set(definition.name, definition);
        writeDefinition(path.join(targetDirectory, trackingDirectory, category), definition, true);
    }

    let removed = 0;
    for (const category of categories) {
        const trackingCategoryDirectory = path.join(targetDirectory, trackingDirectory, category);
        if (!fs.existsSync(trackingCategoryDirectory)) {
            continue;
        }

        const expectedDefinitions = definitionsByCategory.get(category);
        for (const file of fs.readdirSync(trackingCategoryDirectory, { withFileTypes: true })) {
            if (
                !file.isFile()
                || !file.name.endsWith(".json")
                || expectedDefinitions?.has(path.basename(file.name, ".json"))
            ) {
                continue;
            }

            fs.unlinkSync(path.join(trackingCategoryDirectory, file.name));
            removed++;
        }
    }

    return { written: definitions.length, removed };
}

function printSummary(label: string, definitions: ParsedDefinition[]): void {
    console.log(`${label}: ${definitions.length}`);
    for (const category of categories) {
        const categoryDefinitions = getDefinitionsByCategory(definitions, category);
        if (categoryDefinitions.length > 0) {
            console.log(`  ${category}: ${categoryDefinitions.map(({ definition }) => definition.name).join(", ")}`);
        }
    }
}

function main(): void {
    const [targetVersion, sourcesArgument, ...options] = process.argv.slice(2);
    if (!targetVersion || !sourcesArgument) {
        throw new Error(
            "Usage: npm run compare -- <target-version> <sources-directory> [--write]",
        );
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

    const sourcesDirectory = path.resolve(sourcesArgument);
    for (const source of sources) {
        const sourcePath = path.join(sourcesDirectory, source);
        if (!fs.existsSync(sourcePath)) {
            throw new Error(`Required source file does not exist: ${sourcePath}`);
        }
    }

    const olderVersions = findOlderVersions(repositoryRoot, targetVersion);
    if (olderVersions.length === 0) {
        throw new Error(`No older version directories found for ${targetVersion}`);
    }

    const olderDefinitions = collectEffectiveOlderDefinitions(repositoryRoot, olderVersions);
    const targetDefinitions = loadDefinitions(targetDirectory);
    const sourceDefinitions = createDefinitionMaps();
    for (const source of sources) {
        addSourceDefinitions(
            sourceDefinitions,
            parseSource(path.join(sourcesDirectory, source), source),
        );
    }

    const additions: ParsedDefinition[] = [];
    const removals: Array<{ category: Category; definition: Definition }> = [];
    const changes: ChangedDefinition[] = [];
    const unchangedDefinitions: ParsedDefinition[] = [];
    const targetDefinitionsAbsentFromSource: ParsedDefinition[] = [];

    for (const category of categories) {
        const previousDefinitions = olderDefinitions.get(category) ?? new Map<string, Definition>();
        const currentDefinitions = sourceDefinitions.get(category) ?? new Map<string, Definition>();
        const targetCategoryDefinitions = targetDefinitions.get(category) ?? new Map<string, Definition>();

        for (const [name, current] of currentDefinitions) {
            const previous = previousDefinitions.get(name);
            if (!previous) {
                additions.push({ category, definition: current });
            } else if (!definitionsMatch(category, previous, current)) {
                changes.push({ category, previous, current });
            } else {
                unchangedDefinitions.push({ category, definition: current });
            }
        }

        for (const [name, definition] of targetCategoryDefinitions) {
            if (!currentDefinitions.has(name)) {
                targetDefinitionsAbsentFromSource.push({ category, definition });
            }
        }

        for (const [name, previous] of previousDefinitions) {
            if (!currentDefinitions.has(name)) {
                removals.push({ category, definition: previous });
            }
        }
    }

    const additionsRequiringTargetUpdate = additions.filter(
        ({ category, definition }) => {
            const targetDefinition = targetDefinitions.get(category)?.get(definition.name);
            return !targetDefinition || !definitionsMatch(category, targetDefinition, definition);
        },
    );
    const changedDefinitions = changes.map(({ category, current }) => ({
        category,
        definition: current,
    }));

    console.log(`Target version: ${targetVersion}`);
    console.log(`Sources directory: ${sourcesDirectory}`);
    console.log(`Older versions: ${olderVersions.join(", ")}`);
    printSummary("Additions versus older definitions", additions);
    printSummary("Removals versus older definitions", removals);
    printSummary("Changed definitions versus older definitions", changedDefinitions);
    printSummary(
        "Target definitions absent from current sources",
        targetDefinitionsAbsentFromSource,
    );
    console.log(
        `Added definitions requiring target update: ${additionsRequiringTargetUpdate.length}`,
    );

    if (!options.includes("--write")) {
        return;
    }

    const primaryDefinitionResult = writePrimaryDefinitions(
        targetDirectory,
        additions,
        changes,
        targetDefinitions,
        unchangedDefinitions,
        targetDefinitionsAbsentFromSource,
    );
    const removalTrackingResult = writeTrackingDefinitions(
        targetDirectory,
        "removals",
        removals,
    );
    const changeTrackingResult = writeTrackingDefinitions(
        targetDirectory,
        "changes",
        changes.map(({ category, previous }) => ({ category, definition: previous })),
    );
    console.log(
        `Wrote ${primaryDefinitionResult.written} primary definitions and removed ${primaryDefinitionResult.removed} stale overrides.`,
    );
    console.log(
        `Wrote ${removalTrackingResult.written} removal snapshots and removed ${removalTrackingResult.removed} obsolete snapshots.`,
    );
    console.log(
        `Wrote ${changeTrackingResult.written} change snapshots and removed ${changeTrackingResult.removed} obsolete snapshots.`,
    );
}

main();
