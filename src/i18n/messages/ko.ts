/**
 * KO message module — STUB (soft parity, ADR-0010 / Q7=B).
 *
 * Keys are acknowledged (shape-satisfied) but values are still the EN source.
 * Runtime falls back to EN via `t()` until each key is replaced with a
 * machine-drafted + human-reviewed translation (CONTEXT.md → Localized copy).
 *
 * To localize: replace each value with the KO rendering and remove this notice.
 */
import type { Messages } from './types';
import { messages as en } from './en';

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- references en for the stub shape
export const messages: Messages = en;
