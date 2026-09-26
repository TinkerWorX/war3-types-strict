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

Use the comparison parser to find declarations in a version's `blizzard.j`, `common.j`, and `common.ai` sources that are absent from older version definitions:

```sh
npm run compare -- 3.0.0
```

The command reports additions without modifying files. Pass `--write` to add only the missing JSON definitions to the target version folder:

```sh
npm run compare -- 3.0.0 --write
```