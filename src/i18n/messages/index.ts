/**
 * Locale → message-module registry. Consumed by `t()`; do not import locale
 * modules directly outside this file (keeps the fallback + parity logic in
 * one place — ADR-0010).
 */
import type { Locale } from '@/i18n/config';

import type { Messages } from './types';
import { messages as en } from './en';
import { messages as zh } from './zh';
import { messages as ja } from './ja';
import { messages as ko } from './ko';

export const messagesByLocale: Readonly<Record<Locale, Messages>> = {
  en,
  zh,
  ja,
  ko,
};
