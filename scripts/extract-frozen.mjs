/**
 * Extracts the frozen content of the adopting-ai dossier from a copy of its
 * original published markup: every evidence card's id, claim, quotation and
 * apparatus prose, as normalized plain text.
 *
 * The cards and their quotations are research output, verified against live
 * sources. They are frozen: a re-render may change their clothes and never
 * their words. This produces the reference that check-frozen.mjs enforces.
 *
 * Run once, when the dossier was still hand-written markup. The markup it reads
 * is no longer in the tree; the entry is a component tree now, and this script's
 * output is the record of what that tree must keep saying. To regenerate from
 * the original:
 *
 *   git show a0bd5a35a3:content/notebook/adopting-ai/body.html > /tmp/body.html
 *   node scripts/extract-frozen.mjs /tmp/body.html > scripts/frozen-content.json
 */
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

/** Entities the dossier uses, plus the ones React may introduce. */
const NAMED = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  middot: '\u00b7',
  nbsp: ' ',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
};

/**
 * Plain text as a reader sees it: no tags, no entities, no incidental
 * whitespace.
 *
 * Both sides must normalize identically. The published markup writes an
 * apostrophe literally while React escapes it to `&#x27;`, so numeric
 * entities are decoded generically rather than case by case. Only the words
 * are compared, and the words are the same either way.
 */
export function toText(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-zA-Z]+);/g, (whole, name) => NAMED[name] ?? whole)
    .replace(/\s+/g, ' ')
    .trim();
}

function pick(card, re) {
  const match = card.match(re);
  return match ? toText(match[1]) : null;
}

export function extractCards(html) {
  const blocks = [...html.matchAll(/<article class="card"[^>]*id="(e\d+)"[\s\S]*?<\/article>/g)];

  return blocks.map(([block, id]) => ({
    id,
    claim: pick(block, /<h3 class="card__claim">([\s\S]*?)<\/h3>/),
    quote: pick(block, /<blockquote class="card__quote">([\s\S]*?)<\/blockquote>/),
    summarySource: pick(block, /<span class="cardx__src">([\s\S]*?)<\/span>/),
    source: pick(block, /card__row card__cite">[\s\S]*?<\/span><span>([\s\S]*?)<\/span><\/div>/),
    context: pick(block, /<span class="card__row-lbl">Context<\/span><span class="txt">([\s\S]*?)<\/span>/),
    caveat: pick(block, /<span class="card__row-lbl">Caveat<\/span><span class="txt">([\s\S]*?)<\/span>/),
    confidence: (block.match(/chip chip--(\w+)/) ?? [])[1] ?? null,
    tip: pick(block, /data-tip="([^"]*)"/),
  }));
}

/** Only when run directly: check-frozen.mjs imports this module for `toText`. */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [file] = process.argv.slice(2);
  if (!file) {
    console.error('usage: node scripts/extract-frozen.mjs <body.html>');
    process.exit(1);
  }

  const cards = extractCards(await readFile(file, 'utf-8'));

  const missing = cards.filter((c) => !c.claim || !c.quote);
  if (missing.length) {
    console.error(`incomplete extraction for: ${missing.map((c) => c.id).join(', ')}`);
    process.exit(1);
  }

  console.log(JSON.stringify({ cards }, null, 2));
}
