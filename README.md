# war3-types-strict
A set of strict TypeScript types generated for Warcraft III modding.

# Build Dependencies
[Node.js](https://nodejs.org/)

# Usage Instructions
Simply add as a dependency and then use either `1.29.2.d.ts`,  `1.32.10.d.ts` or  `1.33.0.d.ts`.

# Build Instructions
1. Clone or download the repository.
2. Run `npm i`.
3. Run `npm run build`.
4. Grab `common.j.d.ts`, `common.ai.d.ts` and `blizzard.j.d.ts`.

# Contributing
All contributions are welcome and should be done in the json files, as these serve as the database for the generator to generate definitions.

## Comparing version sources

Use the comparison parser to compare a version against an external source directory containing `blizzard.j`, `common.j`, and `common.ai`. Replace the example source path with your extracted Warcraft III scripts directory:

```sh
npm run compare -- 3.0.0 "C:\path\to\war3.w3mod\scripts"
```

The command reports additions, removals, and changed declarations without modifying files. Pass `--write` to add missing definitions, update changed target definitions, and record previous definitions in `removals/<category>` or `changes/<category>` only when the respective differences exist:

```sh
npm run compare -- 3.0.0 "C:\path\to\war3.w3mod\scripts" --write
```