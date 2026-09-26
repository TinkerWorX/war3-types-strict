---
name: war3-types-version-diff
description: Compare a newer Warcraft III version's blizzard.j, common.j, and common.ai source files against definitions from older version folders, then add only newly introduced declarations to the newer version's JSON database. Use when asked to identify or add new Warcraft III types, globals, natives, or functions for a specific war3-types-strict version.
---

## Required target version

The user must specify the version folder to check, such as `1.33.0` or `3.0.0`. If no target version is specified, ask which version to check before inspecting files or making changes.

Treat a version folder as numeric dotted segments, not as a lexical string. The target must be newer than every baseline version used for comparison.

## Scope

For the requested target version:

1. Locate its `blizzard.j`, `common.j`, and `common.ai` source files.
2. Identify declarations in those files:
   - `type ... extends ...`
   - global declarations in `globals` blocks
   - `native ... takes ... returns ...`
   - `function ... takes ... returns ...`
3. Compare each declaration category with the union of the corresponding JSON definitions from every older version folder:
   - `types/*.json`
   - `globals/*.json`
   - `natives/*.json`
   - `functions/*.json`

Assume the newer source contains every declaration from older versions. This workflow is additions-only: do not report, remove, or change declarations solely because an older declaration is absent or differs in the newer source.

## Updating definitions

For declarations present in the target source but absent from every older definition:

1. Add one JSON definition per declaration to the matching directory in the target version folder: `types`, `globals`, `natives`, or `functions`.
2. Match the JSON structure, property conventions, nullability treatment, and `source` values used by comparable declarations in older version folders.
3. Set `source` to the source file that supplied the declaration: `blizzard.j`, `common.j`, or `common.ai`.
4. Do not modify JSON definitions in any older version folder.
5. Do not alter existing target-version JSON definitions unless the user explicitly asks for corrections. This skill identifies additions only.

If a required JSON field cannot be established from the source file and existing conventions, report the ambiguity instead of inventing metadata.

## Validation

After adding definitions:

1. Confirm that every changed JSON file is under the requested target version folder.
2. Ensure the requested target version is passed to `build.ts` by the `npm run build` script. If it is absent, add it after the older versions in numeric order.
3. Run the repository's existing build command, `npm run build`.
4. Verify that the generated target-version declarations contain each added declaration.
5. Inspect the diff to ensure no older version folder's JSON definitions changed.

Report the target version, each added declaration grouped by source file and category, and any unresolved metadata.
