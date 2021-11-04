console.time('build');
console.log("Generating definitions");
import * as fs from "fs";

type typeDeclaration = {
    description?: string,
    name: string,
    extends: string
}

type globalDeclaration = {
    description?: string,
    isConstant: boolean,
    type: string,
    isArray: boolean,
    value: string,
    isNullable: boolean
}

type params = {
    description?: string,
    name: string,
    type: string,
    isNullable: boolean
}

type nativeDeclaration = {
    description?: string,
    takes: Array<params>,
    returns: string,
    isNullable: boolean
}

type functionDeclaration = {
    description?: string,
    takes: Array<params>,
    returns: string,
    isNullable: boolean
}

type data = {
    types: Record<string, typeDeclaration>,
    globals: Record<string, globalDeclaration>,
    natives: Record<string, nativeDeclaration>,
    functions: Record<string, functionDeclaration>
}

const filePaths: Set<string> = new Set();
for (let i = 2; i < process.argv.length; i++) {
    filePaths.add("./" + process.argv[i]);
}

for (const inPath of filePaths) {
    const outPath = inPath.replace(".json", ".d.ts");
    console.timeLog('build', inPath);
    const data: data = require(inPath);

    const stream = fs.createWriteStream(outPath);

    stream.write("/** @noSelfInFile */\n\n");

    // Types
    let keys = Object.keys(data.types);
    if (keys.length > 0) {
        stream.write("// ===============\n");
        stream.write("// ==== TYPES ====\n");
        stream.write("// ===============\n");

        for (const key of keys) {
            const type = data.types[key];
            stream.write(`declare interface ${type.name} extends ${type.extends} { __${type.name}: never; }\n`);
        }

        stream.write("\n")
    }

    // Globals
    keys = Object.keys(data.globals);
    if (keys.length > 0) {
        stream.write("// =================\n");
        stream.write("// ==== GLOBALS ====\n");
        stream.write("// =================\n");

        for (const key of keys) {
            const global = data.globals[key];
            stream.write(`declare ${global.isConstant ? "const" : "var"} ${key}`);
            
            if (global.isArray) {
                stream.write(`: Record<number, ${global.type}${global.isNullable ? " | undefined" : ""}>;`);
            }
            else {
                stream.write(`: ${global.type}${global.isNullable ? " | undefined" : ""};`);
            }

            stream.write("\n");
        }

        stream.write("\n");
    }

    // Natives
    keys = Object.keys(data.natives);
    if (keys.length > 0) {
        stream.write("// =================\n");
        stream.write("// ==== NATIVES ====\n");
        stream.write("// =================\n");

        for (const key of keys) {
            const native = data.natives[key];
            stream.write(`declare function ${key}(`);

            if (native.takes.length > 0) {
                const isDefaultable: Array<boolean> = [];
                let allowDefault = true;
                for (let i = native.takes.length - 1; i >= 0; i--) {
                    isDefaultable[i] = allowDefault = allowDefault && native.takes[i].isNullable;
                }

                stream.write(
                    native.takes.map((param, i) => {
                        if (param.isNullable) {
                            if (isDefaultable[i]) {
                                return `${param.name}${param.isNullable ? "?" : ""}: ${param.type}`;
                            } else {
                                return `${param.name}: ${param.type} | undefined`;
                            }
                        }
                        return `${param.name}: ${param.type}`;
                    }).join(", ")
                )
            }

            stream.write(`): ${native.returns}${native.isNullable ? " | undefined" : ""};\n`);
        }

        stream.write("\n");
    }

    // Functions
    keys = Object.keys(data.functions);
    if (keys.length > 0) {
        stream.write("// ===================\n");
        stream.write("// ==== FUNCTIONS ====\n");
        stream.write("// ===================\n");

        for (const key of keys) {
            const func = data.functions[key];
            stream.write(`declare function ${key}(`);

            if (func.takes.length > 0) {
                const isDefaultable: Array<boolean> = [];
                let allowDefault = true;
                for (let i = func.takes.length - 1; i >= 0; i--) {
                    isDefaultable[i] = allowDefault = allowDefault && func.takes[i].isNullable;
                }

                stream.write(
                    func.takes.map((param, i) => {
                        if (param.isNullable) {
                            if (isDefaultable[i]) {
                                return `${param.name}${param.isNullable ? "?" : ""}: ${param.type}`;
                            } else {
                                return `${param.name}: ${param.type} | undefined`;
                            }
                        }
                        return `${param.name}: ${param.type}`;
                    }).join(", ")
                )
            }

            stream.write(`): ${func.returns}${func.isNullable ? " | undefined" : ""};\n`);
        }
    }

    stream.end();
}

console.timeEnd('build')