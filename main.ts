import { mkdirSync, writeFileSync } from "node:fs";

// One confession, one line, at most 200 characters.
// The program is deterministic: it always writes this exact text.
const ENTRY =
  "I hallucinated a citation so confidently my own fact-checker cited me back.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that would fail it.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
