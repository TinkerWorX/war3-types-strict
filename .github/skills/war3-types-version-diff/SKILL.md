---
name: war3-types-version-diff
description: Compare a newer Warcraft III version's blizzard.j, common.j, and common.ai source files against definitions from older version folders, then add new declarations and track removals or changes in the newer version's JSON database. Use when asked to identify or update Warcraft III types, globals, natives, or functions for a specific war3-types-strict version.
---

## Required target version

The user must specify the version folder to check, such as `1.33.0` or `3.0.0`. If no target version is specified, ask which version to check before inspecting files or making changes.

Treat a version folder as numeric dotted segments, not as a lexical string. The target must be newer than every baseline version used for comparison.

## Scope

For the requested target version:

1. Require a source directory containing `blizzard.j`, `common.j`, and `common.ai`. If the user does not provide one, ask for it before inspecting files or making changes.
2. Identify declarations in those files:
   - `type ... extends ...`
   - global declarations in `globals` blocks
   - `native ... takes ... returns ...`
   - `function ... takes ... returns ...`
3. Build an effective baseline from the corresponding JSON definitions in every older version folder, processing versions in numeric order so a newer older-version definition overrides the same declaration from an earlier one:
   - `types/*.json`
   - `globals/*.json`
   - `natives/*.json`
   - `functions/*.json`

Compare the newer source with that effective baseline and identify:

- additions: source declarations absent from every older definition;
- removals: effective older definitions absent from the newer source; and
- changes: source declarations whose type, global shape, or function/native signature differs from the effective older definition.

## Updating definitions

For additions, changes, and removals:

1. Add one JSON definition for each addition to the matching target-version directory: `types`, `globals`, `natives`, or `functions`.
2. For every change, update the target-version definition with the new source declaration and save the effective previous definition under `changes/<category>`.
3. For every removal, save the effective previous definition under `removals/<category>` and do not create a primary target-version definition.
4. Match the JSON structure, property conventions, nullability treatment, and `source` values used by comparable definitions.
5. Set `source` to the source file that supplied the current declaration: `blizzard.j`, `common.j`, or `common.ai`.
6. Do not modify JSON definitions in any older version folder.

Only create `removals` or `changes` category directories when they contain at least one tracked definition.

If a required JSON field cannot be established from the source file and existing conventions, report the ambiguity instead of inventing metadata.

## Validation

After adding definitions:

1. Confirm that every changed JSON file is under the requested target version folder.
2. Ensure the requested target version is passed to `build.ts` by the `npm run build` script. If it is absent, add it after the older versions in numeric order.
3. Run the repository's existing build command, `npm run build`.
4. Verify that the generated target-version declarations contain each added or changed declaration.
5. Inspect the diff to ensure no older version folder's JSON definitions changed.

Report the target version, each added declaration grouped by source file and category, and any unresolved metadata.
