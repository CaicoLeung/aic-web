/**
 * Message-block parity gate (ADR-0007 gap closure).
 *
 * `tsc --noEmit` only type-checks `.ts`. The `.astro` routes index messages
 * by rival id (`m.vs[id]`, `m.alt[id]`), so a rival added to `COMPARISONS`
 * without its i18n block can slip past the type gate and render an empty
 * page. This test makes that a CI failure: every rival in `COMPARISONS`
 * must carry a complete `vs` + `alt` block in every published locale.
 *
 * Also pins the unified `deepseek.faq` shape (`{ h2, items }`, not the old
 * bare-array + `faqH`) so the two FAQ shapes cannot silently diverge again.
 *
 * `Messages` is a deep-readonly literal type derived from EN, so every cast
 * goes through `unknown` first to avoid fighting its readonly-ness.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { COMPARISONS } from '../src/config/competitors.ts';
import { messagesByLocale } from '../src/i18n/messages/index.ts';

const RIVAL_IDS = Object.keys(COMPARISONS);
const LOCALES = Object.keys(messagesByLocale) as ReadonlyArray<
  keyof typeof messagesByLocale
>;

interface VsBlock {
  axes: Record<string, { feature?: unknown }>;
  faq: { h2?: unknown; items?: readonly unknown[] };
}
interface AltBlock {
  migrate?: readonly unknown[];
}
interface AltShared {
  migrateLead?: unknown;
}
type LocaleMessages = {
  vs: Record<string, VsBlock>;
  alt: Record<string, AltBlock> & AltShared;
  deepseek: { faq: { h2?: unknown; items?: readonly unknown[] } };
};

function msgs(locale: keyof typeof messagesByLocale): LocaleMessages {
  return messagesByLocale[locale] as unknown as LocaleMessages;
}

describe('rival message parity', () => {
  for (const locale of LOCALES) {
    describe(`locale: ${locale}`, () => {
      for (const id of RIVAL_IDS) {
        it(`has messages.vs['${id}'] with an axes block + faq.{h2,items}`, () => {
          const m = msgs(locale);
          const vs = m.vs[id];
          assert.ok(vs, `messages.vs['${id}'] missing in ${locale}`);
          // Each editorial axis must have a localized label row.
          for (const axis of COMPARISONS[id].axes) {
            const row = vs.axes[axis.id];
            assert.ok(
              row && typeof row.feature === 'string',
              `messages.vs['${id}'].axes['${axis.id}'] missing in ${locale}`,
            );
          }
          assert.ok(vs.faq?.h2, `messages.vs['${id}'].faq.h2 missing in ${locale}`);
          assert.ok(
            Array.isArray(vs.faq?.items) && vs.faq.items.length > 0,
            `messages.vs['${id}'].faq.items empty in ${locale}`,
          );
        });

        it(`has messages.alt['${id}'] with the setup + commit migrate steps`, () => {
          const m = msgs(locale);
          const alt = m.alt[id];
          assert.ok(alt, `messages.alt['${id}'] missing in ${locale}`);
          assert.ok(
            Array.isArray(alt.migrate) && alt.migrate.length >= 2,
            `messages.alt['${id}'].migrate must have the setup + commit steps in ${locale}`,
          );
        });
      }
    });
  }
});

describe('shared alt.migrateLead', () => {
  // The install step's localized lead-in is shared across all rivals (the
  // command itself is sourced from PRIMARY_INSTALL_COMMAND, never typed per
  // locale — ADR-0006). Verify it exists once per locale.
  for (const locale of LOCALES) {
    it(`defines alt.migrateLead in ${locale}`, () => {
      assert.ok(
        typeof msgs(locale).alt.migrateLead === 'string',
        `messages.alt.migrateLead missing in ${locale}`,
      );
    });
  }
});

describe('deepseek faq shape', () => {
  for (const locale of LOCALES) {
    it(`unified { h2, items } in ${locale}`, () => {
      const faq = msgs(locale).deepseek.faq;
      assert.ok(faq.h2, `deepseek.faq.h2 missing in ${locale}`);
      assert.ok(
        Array.isArray(faq.items) && faq.items.length > 0,
        `deepseek.faq.items must be a non-empty array in ${locale}`,
      );
    });
  }
});
