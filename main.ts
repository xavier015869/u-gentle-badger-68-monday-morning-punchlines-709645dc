// Monday Morning Punchlines — one joke about Monday mornings.
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I tried to cancel my Monday subscription. It auto-renewed at 6 AM, and customer service is my alarm clock — it just laughs and rings again.";

// The gate requires 1–200 characters of non-whitespace text: refuse loudly
// instead of shipping an invalid entry.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
