# war3-types-strict
A set of strict TypeScript types generated for Warcraft III modding.

# Build Dependencies
[Node.js](https://nodejs.org/)

# Usage Instructions
The repository currently builds declaration bundles for `1.29.2`, `1.32.10`, `1.33.0`, and `3.0.0`. Add the package as a dependency, then reference the bundle matching your Warcraft III version. The bundles are not automatically loaded by TypeScript because the package does not declare a `types` entry point.

As in the `w3ts` project, you can add the selected bundle to `compilerOptions.types` in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["war3-types-strict/3.0.0"]
  }
}
```

If your `types` option already lists other type packages, add the Warcraft bundle to that list rather than replacing it. Alternatively, if your project has a `src/types.d.ts` file, use a triple-slash reference (adjust the relative path and version as needed):

```ts
/// <reference path="../node_modules/war3-types-strict/3.0.0.d.ts" />
```

The version bundle references `compat.d.ts`, `polyfill.d.ts`, and that version's `common.j`, `common.ai`, and `blizzard.j` declarations. Reference the bundle rather than including an individual source declaration file.

# Build Instructions
1. Clone or download the repository.
2. Run `npm i`.
3. Run `npm run build`.
4. Use the generated `<version>.d.ts` bundle to load the declarations for the selected version.

# Contributing
All contributions are welcome and should be done in the json files, as these serve as the database for the generator to generate definitions.

## Comparing version sources

When adding a version, first create its version directory (for example, `3.1.0/`) and add that version to the `build` script in `package.json`. The comparison parser requires the target directory to exist, and the build script explicitly lists which versions produce declaration bundles. Keep the version list in ascending order.

When adding or updating a version, compare it against an external source directory containing `blizzard.j`, `common.j`, and `common.ai`. Replace the example source path with your extracted Warcraft III scripts directory:

```sh
npm run compare -- 3.0.0 "C:\path\to\war3.w3mod\scripts"
```

The command reports additions, removals, changed declarations, and target definitions absent from the current sources without modifying files. Pass `--write` only when the source files are complete and you want to synchronize the tracked definitions: it adds missing definitions, updates changed definitions, removes target definitions absent from the sources, and reconciles previous-definition snapshots in `removals/<category>` and `changes/<category>`.

The build generator applies removal snapshots so declarations removed from a version are not inherited from earlier versions.

```sh
npm run compare -- 3.0.0 "C:\path\to\war3.w3mod\scripts" --write
```