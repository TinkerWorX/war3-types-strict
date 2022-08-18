import * as fs from 'fs';
import * as path from 'path';

console.time('build');
console.log("Generating definitions");

type typeDeclaration = {
    description?: string,
    name: string,
    extends: string
    source: string;
}

type globalDeclaration = {
    name: string;
    description?: string,
    isConstant: boolean,
    type: string,
    isArray: boolean,
    value: string,
    isNullable: boolean
    source: string;
}

type params = {
    description?: string,
    name: string,
    type: string,
    isNullable: boolean
}

type nativeDeclaration = {
    name: string,
    description?: string,
    takes: Array<params>,
    returns: string,
    isNullable: boolean
    source: string;
}

type functionDeclaration = {
    name: string,
    description?: string,
    takes: Array<params>,
    returns: string,
    isNullable: boolean
    source: string;
}

const types: Map<string, typeDeclaration> = new Map();
const globals: Map<string, globalDeclaration> = new Map();
const natives: Map<string, nativeDeclaration> = new Map();
const functions: Map<string, functionDeclaration> = new Map();

const versions: Set<string> = new Set();
for (let i = 2; i < process.argv.length; i++) {
    versions.add("./" + process.argv[i]);
}

for (const version of versions) {
    // Read the version directories passed in, in order, overwriting any previous keys if relevant.
    if (fs.existsSync(path.join(version, "types")))
        fs.readdirSync(path.join(version, "types")).forEach(file => { types.set(file.replace(".json", ""), JSON.parse(fs.readFileSync(path.join(version, "types", file)).toString())) });
    if (fs.existsSync(path.join(version, "globals")))
        fs.readdirSync(path.join(version, "globals")).forEach(file => { globals.set(file.replace(".json", ""), JSON.parse(fs.readFileSync(path.join(version, "globals", file)).toString())) });
    if (fs.existsSync(path.join(version, "natives")))
        fs.readdirSync(path.join(version, "natives")).forEach(file => { natives.set(file.replace(".json", ""), JSON.parse(fs.readFileSync(path.join(version, "natives", file)).toString())) });
    if (fs.existsSync(path.join(version, "functions")))
        fs.readdirSync(path.join(version, "functions")).forEach(file => { functions.set(file.replace(".json", ""), JSON.parse(fs.readFileSync(path.join(version, "functions", file)).toString())) });

    const stream = fs.createWriteStream(version + ".d.ts");
    stream.write(`/// <reference path="./compat.d.ts" />\n`);
    stream.write(`/// <reference path="${version}/common.j.d.ts" />\n`);
    stream.write(`/// <reference path="${version}/common.ai.d.ts" />\n`);
    stream.write(`/// <reference path="${version}/blizzard.j.d.ts" />\n`);
    stream.write(`/// <reference path="./polyfill.d.ts" />\n`);
    stream.end();

    const sources = ["common.j", "common.ai", "blizzard.j"];
    for (const source of sources) {
        const stream = fs.createWriteStream(path.join(version, source + ".d.ts"));

        stream.write("/** @noSelfInFile */\n\n");

        // Types
        stream.write("// ===============\n");
        stream.write("// ==== TYPES ====\n");
        stream.write("// ===============\n");

        for (const [name, type] of types) {
            if (type.source !== source) continue;
            stream.write(`declare interface ${type.name} extends ${type.extends} { __${type.name}: never; }\n`);
        }

        stream.write("\n")

        // Globals
        stream.write("// =================\n");
        stream.write("// ==== GLOBALS ====\n");
        stream.write("// =================\n");

        for (const [name, global] of globals) {
            if (global.source !== source) continue;
            stream.write(`declare ${global.isConstant ? "const" : "var"} ${global.name}`);

            if (global.isArray) {
                stream.write(`: Record<number, ${global.type}${global.isNullable ? " | undefined" : ""}>;`);
            }
            else {
                stream.write(`: ${global.type}${global.isNullable ? " | undefined" : ""};`);
            }

            stream.write("\n");
        }

        stream.write("\n");

        // Natives
        stream.write("// =================\n");
        stream.write("// ==== NATIVES ====\n");
        stream.write("// =================\n");

        for (const [name, native] of natives) {
            if (native.source !== source) continue;
            stream.write(`declare function ${native.name}(`);

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

            stream.write("\n");
        }

        // Functions
        stream.write("// ===================\n");
        stream.write("// ==== FUNCTIONS ====\n");
        stream.write("// ===================\n");

        for (const [name, func] of functions) {
            if (func.source !== source) continue;
            stream.write(`declare function ${func.name}(`);

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

        stream.end();
    }
}

// for (const inPath of filePaths) {
//     const outPath = inPath.replace(".json", ".d.ts");
//     console.timeLog('build', inPath);
//     const data: data = require(inPath);

//     const stream = fs.createWriteStream(outPath);

//     stream.write("/** @noSelfInFile */\n\n");

//     // Types
//     let keys = Object.keys(data.types);
//     if (keys.length > 0) {
//         stream.write("// ===============\n");
//         stream.write("// ==== TYPES ====\n");
//         stream.write("// ===============\n");

//         for (const key of keys) {
//             const type = data.types[key];
//             stream.write(`declare interface ${type.name} extends ${type.extends} { __${type.name}: never; }\n`);
//         }

//         stream.write("\n")
//     }

//     // Globals
//     keys = Object.keys(data.globals);
//     if (keys.length > 0) {
//         stream.write("// =================\n");
//         stream.write("// ==== GLOBALS ====\n");
//         stream.write("// =================\n");

//         for (const key of keys) {
//             const global = data.globals[key];
//             stream.write(`declare ${global.isConstant ? "const" : "var"} ${key}`);

//             if (global.isArray) {
//                 stream.write(`: Record<number, ${global.type}${global.isNullable ? " | undefined" : ""}>;`);
//             }
//             else {
//                 stream.write(`: ${global.type}${global.isNullable ? " | undefined" : ""};`);
//             }

//             stream.write("\n");
//         }

//         stream.write("\n");
//     }

//     // Natives
//     keys = Object.keys(data.natives);
//     if (keys.length > 0) {
//         stream.write("// =================\n");
//         stream.write("// ==== NATIVES ====\n");
//         stream.write("// =================\n");

//         for (const key of keys) {
//             const native = data.natives[key];
//             stream.write(`declare function ${key}(`);

//             if (native.takes.length > 0) {
//                 const isDefaultable: Array<boolean> = [];
//                 let allowDefault = true;
//                 for (let i = native.takes.length - 1; i >= 0; i--) {
//                     isDefaultable[i] = allowDefault = allowDefault && native.takes[i].isNullable;
//                 }

//                 stream.write(
//                     native.takes.map((param, i) => {
//                         if (param.isNullable) {
//                             if (isDefaultable[i]) {
//                                 return `${param.name}${param.isNullable ? "?" : ""}: ${param.type}`;
//                             } else {
//                                 return `${param.name}: ${param.type} | undefined`;
//                             }
//                         }
//                         return `${param.name}: ${param.type}`;
//                     }).join(", ")
//                 )
//             }

//             stream.write(`): ${native.returns}${native.isNullable ? " | undefined" : ""};\n`);
//         }

//         stream.write("\n");
//     }

//     // Functions
//     keys = Object.keys(data.functions);
//     if (keys.length > 0) {
//         stream.write("// ===================\n");
//         stream.write("// ==== FUNCTIONS ====\n");
//         stream.write("// ===================\n");

//         for (const key of keys) {
//             const func = data.functions[key];
//             stream.write(`declare function ${key}(`);

//             if (func.takes.length > 0) {
//                 const isDefaultable: Array<boolean> = [];
//                 let allowDefault = true;
//                 for (let i = func.takes.length - 1; i >= 0; i--) {
//                     isDefaultable[i] = allowDefault = allowDefault && func.takes[i].isNullable;
//                 }

//                 stream.write(
//                     func.takes.map((param, i) => {
//                         if (param.isNullable) {
//                             if (isDefaultable[i]) {
//                                 return `${param.name}${param.isNullable ? "?" : ""}: ${param.type}`;
//                             } else {
//                                 return `${param.name}: ${param.type} | undefined`;
//                             }
//                         }
//                         return `${param.name}: ${param.type}`;
//                     }).join(", ")
//                 )
//             }

//             stream.write(`): ${func.returns}${func.isNullable ? " | undefined" : ""};\n`);
//         }
//     }

//     stream.end();
// }

console.timeEnd('build')