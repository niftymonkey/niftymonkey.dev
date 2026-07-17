/**
 * Fails if the rendered dossier has lost or altered any frozen words.
 *
 * The evidence cards are research output whose quotations were verified against
 * live sources; re-rendering them is allowed to change their markup and never
 * their text. This compares the built page against scripts/frozen-content.json
 * and reports every card whose words moved.
 *
 *   pnpm build && node scripts/check-frozen.mjs
 */
import { readFile } from 'node:fs/promises';
import { toText } from './extract-frozen.mjs';

const PAGE = '.next/server/app/notebook/adopting-ai.html';
const REFERENCE = 'scripts/frozen-content.json';

/** Fields whose text must survive verbatim, in the order a reader meets them. */
const FROZEN_FIELDS = ['claim', 'quote', 'summarySource', 'source', 'context', 'caveat'];

const { cards } = JSON.parse(await readFile(REFERENCE, 'utf-8'));
const rendered = toText(await readFile(PAGE, 'utf-8'));

const failures = [];
for (const card of cards) {
  for (const field of FROZEN_FIELDS) {
    const expected = card[field];
    if (!expected) continue;
    if (!rendered.includes(expected)) {
      failures.push({ id: card.id, field, expected });
    }
  }
}

if (failures.length) {
  console.error(`\n${failures.length} frozen string(s) missing from the render:\n`);
  for (const { id, field, expected } of failures) {
    const preview = expected.length > 90 ? `${expected.slice(0, 90)}…` : expected;
    console.error(`  ${id.toUpperCase()} ${field}: ${preview}`);
  }
  console.error('');
  process.exit(1);
}

const checked = cards.reduce(
  (n, card) => n + FROZEN_FIELDS.filter((field) => card[field]).length,
  0,
);
console.log(`frozen content intact: ${checked} strings across ${cards.length} cards`);
