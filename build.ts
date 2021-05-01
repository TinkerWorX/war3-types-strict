console.log("Generating definitions");
import * as fs from "fs";

const filePaths: Set<string> = new Set();
for (let i = 2; i < process.argv.length; i++) {
    filePaths.add("./" + process.argv[i]);
}

for (const inPath of filePaths) {
    const outPath = inPath.replace(".json", ".d.ts");
    console.log(`Processing: ${inPath}`);
    const data = require(inPath);
    fs.writeFileSync(outPath, "/** @noSelfInFile **/\n");
    fs.appendFileSync(outPath, "\n");

    if (Object.keys(data.types).length > 0) {
        fs.appendFileSync(outPath, "// ===============\n");
        fs.appendFileSync(outPath, "// ==== TYPES ====\n");
        fs.appendFileSync(outPath, "// ===============\n");
        for (const typeDeclaration of data.types) {
            fs.appendFileSync(outPath, `declare interface ${typeDeclaration.name} extends ${typeDeclaration.extends} { __${typeDeclaration.name}: never; }\n`);
        }
        fs.appendFileSync(outPath, "\n");
    }

    if (Object.keys(data.globals).length > 0) {
        fs.appendFileSync(outPath, "// =================\n");
        fs.appendFileSync(outPath, "// ==== GLOBALS ====\n");
        fs.appendFileSync(outPath, "// =================\n");
        for (const key of Object.keys(data.globals)) {
            const globalDeclaration = data.globals[key];
            fs.appendFileSync(outPath, "declare");
            if (globalDeclaration.isConstant)
                fs.appendFileSync(outPath, " const");
            else
                fs.appendFileSync(outPath, " var");
            fs.appendFileSync(outPath, ` ${key}`);
            if (globalDeclaration.isArray)
                fs.appendFileSync(outPath, `: Record<number, ${globalDeclaration.type}${globalDeclaration.isNullable ? " | undefined" : ""}>;`);
            else
                fs.appendFileSync(outPath, `: ${globalDeclaration.type}${globalDeclaration.isNullable ? " | undefined" : ""};`);
            fs.appendFileSync(outPath, "\n");
        }
        fs.appendFileSync(outPath, "\n");
    }

    if (Object.keys(data.natives).length > 0) {
        fs.appendFileSync(outPath, "// =================\n");
        fs.appendFileSync(outPath, "// ==== NATIVES ====\n");
        fs.appendFileSync(outPath, "// =================\n");
        for (const key of Object.keys(data.natives)) {
            const nativeDeclaration = data.natives[key];
            fs.appendFileSync(outPath, `declare function ${key}(`);
            if (nativeDeclaration.takes.length > 0) {
                fs.appendFileSync(outPath, nativeDeclaration.takes.map(({ name, type, isNullable }: any) => `${name}: ${type}${isNullable ? " | undefined" : ""}`).join(", "));
            }
            fs.appendFileSync(outPath, `): ${nativeDeclaration.returns}${nativeDeclaration.isNullable ? " | undefined" : ""};\n`);
        }
        fs.appendFileSync(outPath, "\n");
    }

    if (Object.keys(data.functions).length > 0) {
        fs.appendFileSync(outPath, "// ===================\n");
        fs.appendFileSync(outPath, "// ==== FUNCTIONS ====\n");
        fs.appendFileSync(outPath, "// ===================\n");
        for (const key of Object.keys(data.functions)) {
            const functionDeclaration = data.functions[key];
            fs.appendFileSync(outPath, `declare function ${key}(`);
            if (functionDeclaration.takes.length > 0) {
                fs.appendFileSync(outPath, functionDeclaration.takes.map(({ name, type, isNullable }: any) => `${name}: ${type}${isNullable ? " | undefined" : ""}`).join(", "));
            }
            fs.appendFileSync(outPath, `): ${functionDeclaration.returns}${functionDeclaration.isNullable ? " | undefined" : ""};\n`);
        }
    }
}
