import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { stripTypeScriptTypes } from "node:module";

const built = execFileSync("biome", ["format", "--stdin-file-path=float.js"], {
	input: stripTypeScriptTypes(readFileSync("src/float.ts", "utf8")),
	encoding: "utf8",
});

if (!process.argv.includes("--check")) {
	writeFileSync("float.js", built);
} else if (built !== readFileSync("float.js", "utf8")) {
	console.error("float.js is not what src/float.ts builds to, run yarn build");
	process.exitCode = 1;
}
