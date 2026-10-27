import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { stripTypeScriptTypes } from "node:module";

const { main } = JSON.parse(readFileSync("manifest.json", "utf8")) as { main: string };

const built = execFileSync("biome", ["format", `--stdin-file-path=${main}`], {
	input: stripTypeScriptTypes(readFileSync("src/float.ts", "utf8")),
	encoding: "utf8",
});

if (!process.argv.includes("--check")) {
	writeFileSync(main, built);
} else if (built !== readFileSync(main, "utf8")) {
	console.error(`${main} is not what src/float.ts builds to, run yarn build`);
	process.exitCode = 1;
}
