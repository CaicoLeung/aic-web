/**
 * Build-time message-completeness guard (ADR-0007 gap closure).
 *
 * `tsc --noEmit` type-checks `.ts` only — `.astro` frontmatter is not covered
 * (ADR-0007), so a string-indexed lookup like `m.vs[id]` / `m.alt[id]` can
 * miss a missing rival block at the type level. A rival added to
 * `COMPARISONS` without its i18n blocks would otherwise render an empty page
 * (or throw a cryptic "cannot read 'axes' of undefined") at build.
 *
 * Calling `assertRivalMessages` from a page's frontmatter turns that into a
 * clear, fail-fast build error naming the missing block. `tests/messages-parity.test.ts`
 * mirrors the same check across all locales so it is also caught in CI.
 */
import type { Messages } from './messages/types';

/**
 * Throws if the `vs` or `alt` message block for `id` is missing in `m`.
 * Call from `.astro` frontmatter (runs at build time).
 */
export function assertRivalMessages(m: Messages, id: string): void {
  if (!m.vs || !(id in m.vs)) {
    throw new Error(
      `messages.vs['${id}'] is missing — add the i18n block, or remove the rival from COMPARISONS in src/config/competitors.ts.`,
    );
  }
  if (!m.alt || !(id in m.alt)) {
    throw new Error(
      `messages.alt['${id}'] is missing — add the i18n block, or remove the rival from COMPARISONS in src/config/competitors.ts.`,
    );
  }
}
