/**
 * The Messages shape — derived from the canonical `en` module (ADR-0010 / Q6=A).
 *
 * Every locale module `satisfies Messages` against this type, so adding a key
 * to `en.ts` forces every locale to acknowledge it (a stub to the en value is
 * allowed under soft parity — Q7=B — but the key cannot silently vanish).
 */
import type * as en from './en';

export type Messages = typeof en.messages;
