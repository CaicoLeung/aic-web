/**
 * Translation primitive (ADR-0010 / Q6=A).
 *
 * `t(path, params?)` does a dot-key lookup against the current locale's
 * message module and substitutes `{param}` placeholders. On a miss it falls
 * back to the canonical `en` module; only if `en` is also missing (a type
 * error under parity, i.e. should never ship) does it return the key path
 * itself as a visible signal.
 *
 * Soft parity (Q7=B): a stubbed value === the en source, so a half-done
 * locale renders the en string at runtime — never an empty cell.
 */
import { DEFAULT_LOCALE, type Locale } from '@/i18n/config';
import { messagesByLocale } from './messages';

export type TranslateFn = (
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

export function translate(
  locale: Locale,
  path: string,
  params?: Record<string, string | number>,
): string {
  const localized = lookup(messagesByLocale[locale], path);
  const fallback = lookup(messagesByLocale[DEFAULT_LOCALE], path);
  return substitute(localized ?? fallback ?? path, params);
}

/** Bind a locale to `t` for ergonomic use inside an Astro component. */
export function useTranslations(locale: Locale): TranslateFn {
  return (path, params) => translate(locale, path, params);
}

/**
 * Direct access to a locale's full message module — for structured values
 * (arrays of steps/points) that `t()` (scalar-only) can't return. Prefer
 * `t()` for plain strings; use this only for list-shaped messages.
 */
export function useMessages(locale: Locale): typeof import('./messages/en').messages {
  return messagesByLocale[locale];
}
