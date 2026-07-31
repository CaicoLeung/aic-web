/**
 * Localized-copy primitive (ADR-0010 / Q6=A).
 *
 * `t(path, params?)` does a dot-key lookup against the current locale's
 * message module and substitutes `{param}` placeholders. On a miss it falls
 * back to the canonical `en` module; only if `en` is also missing (a type
 * error under parity, i.e. should never ship) does it return the key path
 * itself as a visible signal.
 *
 * Soft parity (Q7=B): a stubbed value === the en source, so a half-done
 * locale renders the en string at runtime — never an empty cell.
 *
 * Naming follows CONTEXT.md → Localized copy: the copy is a human-owned
 * Localized rendering of the Canonical locale; this lookup only renders it
 * ("translation" would imply the mechanical word-swap the vocabulary
 * explicitly avoids).
 */
import { DEFAULT_LOCALE, type Locale } from '@/i18n/config';
import { messagesByLocale } from './messages';
import type { Messages } from './messages/types';

export type LocalizeFn = (
  path: string,
  params?: Record<string, string | number>,
) => string;

function lookup(module: unknown, path: string): string | undefined {
  let cur: unknown = module;
  for (const part of path.split('.')) {
    if (cur && typeof cur === 'object' && part in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof cur === 'string' ? cur : undefined;
}

function substitute(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    key in params ? String(params[key]) : `{${key}}`,
  );
}

export function localize(
  locale: Locale,
  path: string,
  params?: Record<string, string | number>,
): string {
  const localized = lookup(messagesByLocale[locale], path);
  const fallback = lookup(messagesByLocale[DEFAULT_LOCALE], path);
  return substitute(localized ?? fallback ?? path, params);
}

/** Bind a locale to `t` for ergonomic use inside an Astro component. */
export function useLocalizer(locale: Locale): LocalizeFn {
  return (path, params) => localize(locale, path, params);
}

/**
 * Direct access to a locale's full message module — for structured values
 * (arrays of steps/points) that `t()` (scalar-only) can't return. Prefer
 * `t()` for plain strings; use this only for list-shaped messages.
 */
export function useMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}
