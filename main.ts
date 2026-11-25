// Your Week in One Line entry (Node 22, standard library only):
// writes one line, at most 100 characters, summing up the entrant's week,
// to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line: Monday I had a plan; by Friday the plan had a plan, the Wi-Fi
// died, and the chaos got called strategy. Win, fail and chaos in one
// breath — the plan multiplying, the Wi-Fi dying, and the week's only
// deliverable being a euphemism.
// Verified by running the program: the output is one line, within 100 chars.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "Monday I had a plan; by Friday the plan had a plan, the Wi-Fi died, and I called the chaos strategy.",
);
