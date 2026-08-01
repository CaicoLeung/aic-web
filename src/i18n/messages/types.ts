/**
 * The Messages shape — derived from the canonical `en` module (ADR-0010 / Q6=A).
 *
 * `MessageShape` widens every leaf string literal to `string` (and drops
 * `readonly`), so a locale module may carry *translated* values while still
 * being checked for key parity: a missing or extra key is a type error, but
 * the string content is free to differ. This is what lets `zh.ts` hold real
 * Chinese translations against a shape derived from the English source.
 */
import type * as en from './en';

type MessageShape<T> = T extends string
  ? string
  : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<MessageShape<U>>
    : T extends object
      ? { -readonly [K in keyof T]: MessageShape<T[K]> }
      : T;

export type Messages = MessageShape<typeof en.messages>;
