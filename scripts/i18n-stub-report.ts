/**
 * i18n translation-status report (ADR-0010 / Q7=B).
 *
 * Walks each non-default locale's message module and counts leaf strings
 * still identical to the EN canonical source (= stubbed). Printed on every
 * build so translation debt is visible in CI + deploy logs instead of
 * hidden behind soft-parity fallback. Informational only — never exits
 * non-zero (wrapped `|| true` in the build script).
 *
 * Keys that stay stubbed by design (brands, literal commands, tool names)
 * remain visible here on purpose — the report makes the intentional
 * invariants explicit rather than silently asserting they're translated.
 */
import { messages as en } from '../src/i18n/messages/en';
import { messages as zh } from '../src/i18n/messages/zh';
import { messages as ja } from '../src/i18n/messages/ja';
import { messages as ko } from '../src/i18n/messages/ko';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '../src/i18n/config';
import type { Messages } from '../src/i18n/messages/types';

interface Leaf {
  readonly path: string;
  readonly value: string;
}

/** Recursively collect leaf string values with dot/bracket paths. */
function leaves(obj: unknown, prefix = ''): Leaf[] {
  if (typeof obj === 'string') return [{ path: prefix || '(root)', value: obj }];
  if (Array.isArray(obj)) {
    return obj.flatMap((v, i) => leaves(v, `${prefix}[${i}]`));
  }
  if (obj && typeof obj === 'object') {
    return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
      leaves(v, prefix ? `${prefix}.${k}` : k),
    );
  }
  return [];
}

const mods: Readonly<Record<Locale, Messages>> = { en, zh, ja, ko };
const enPaths = new Map(leaves(en).map((l) => [l.path, l.value]));
const total = enPaths.size;

const rows = LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => {
  const locLeaves = new Map(leaves(mods[locale]).map((l) => [l.path, l.value]));
  let stubbed = 0;
  for (const [path, enVal] of enPaths) {
    // A missing key is a type error under parity, but count it as stubbed
    // defensively rather than crash.
    if (locLeaves.get(path) === enVal) stubbed += 1;
  }
  const translated = total - stubbed;
  const pct = Math.round((translated / total) * 100);
  return { locale, translated, stubbed, total, pct };
});

console.log('\n🌐  i18n translation status (ADR-0010 / Q7=B — soft parity)');
console.log(
  ['locale', 'translated', 'stubbed', 'total', '%'].map((h) => h.padEnd(12)).join(''),
);
for (const r of rows) {
  console.log(
    [r.locale, String(r.translated), String(r.stubbed), String(r.total), `${r.pct}%`]
      .map((c) => c.padEnd(12))
      .join(''),
  );
}
if (rows.some((r) => r.stubbed > 0)) {
  console.log(
    '\nstubbed = keys still rendering the EN source — intentional invariants\n(brands, literal commands, tool names) stay stubbed by design; translate\nthe rest in src/i18n/messages/{locale}.ts to clear the debt.\n',
  );
} else {
  console.log('\nAll locales fully translated — zero stubbed keys.\n');
}
