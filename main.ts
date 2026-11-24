// Make the AI Judge Laugh: the Office Joke Open
// Writes one single-line office joke (<= 200 chars) to /output/entry.txt.
// Node 22, stdlib only.
import fs from "node:fs";
import path from "node:path";

// The joke: a meeting about too many meetings that runs over, so the fix
// for too many meetings is one more meeting. The payoff lands in the
// last few words, and the recursion is the whole gag. (rev: wording frozen)
//
const JOKE =
  "My boss called a meeting about why we have too many meetings; it ran over, so we scheduled another meeting about the meeting.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

// Gate: single line, 1-200 characters, UTF-8, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} chars, must be 1-200`);
}
if (/\n|\r/.test(JOKE) || JOKE.trim().length === 0) {
  throw new Error("joke must be a single non-blank line");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${outFile}`);
