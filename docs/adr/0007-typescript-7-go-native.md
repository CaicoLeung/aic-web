# ADR-0007: Upgrade to TypeScript 7 (Go-native compiler)

- **Status:** Accepted
- **Date:** 2026-07-09
- **Decision owner:** Caico Leung

## Context

TypeScript 7.0 went GA on 2026-07-08. It is a complete rewrite of the
compiler ("Project Corsa") ported from TypeScript/JavaScript to **Go**,
distributed as platform-specific native binaries
(`@typescript/typescript-<platform>` optional dependencies) that the `tsc`
shim `execve`s into. Targets up to ~10× faster type-checking via native
execution and goroutine-level parallelism. This repo was on TypeScript
5.9.3 (`^5.6.0`).

The build's type-check gate was `astro check && astro build`.
`astro check` delegates to `@astrojs/check`, which drives the TypeScript
**programmatic** Language Service API via `@astrojs/language-server` /
Volar. TypeScript 7's programmatic API is **not stabilized until 7.1**, and
`@astrojs/check@0.9.9` (the latest) only declares
`peerDependencies: typescript ^5.0.0 || ^6.0.0`.

## Decision

**Upgrade to TypeScript 7.0.2** and accept the Go-native compiler, with two
accommodations:

1. **Migrate `tsconfig.json` for TS 7 breaking changes.** TS 7 **removed**
   the `baseUrl` option (TS5102) and now requires `paths` entries to be
   **relative** (TS5090). Removed `baseUrl: "."`; rewrote
   `"@/*": ["src/*"]` → `"@/*": ["./src/*"]`. Resolution is otherwise
   unchanged (still `moduleResolution: "Bundler"` from
   `astro/tsconfigs/strict`, which the Go port supports).

2. **Replace the `astro check` gate with the Go-native `tsc --noEmit`.**
   `astro check` hard-crashes on TS 7
   (`Cannot read properties of undefined (reading 'fileExists')` in
   `@astrojs/language-server` `getTsconfig`, which reads the TS `System`
   object the new API no longer provides in the expected shape). There is
   no config workaround — it requires a `@astrojs/language-server` release
   that supports TS 7, which does not exist yet. So:
   - `build`: `astro check && astro build` → **`tsc --noEmit && astro build`**
   - `check`: `astro check` → **`tsc --noEmit`** (Go-native, ~0.3s)

   `astro build` itself (Vite/esbuild, no type-checking) works on TS 7.

The TS 7 peer mismatch with `@astrojs/check` (and `tsconfck`, `zod-to-ts`)
is left as a non-fatal pnpm warning (`strict-peer-dependencies` is off by
default). pnpm's supply-chain policy auto-appended the
`@typescript/typescript-*` native-binary packages and `typescript@7.0.2`
to `minimumReleaseAgeExclude` in `pnpm-workspace.yaml`.

## Consequences

- **Pro:** ~10× faster `tsc` (the whole project type-checks in ~0.3s).
  The build keeps a real type-check gate (`tsc --noEmit`) in CI via
  `pnpm build`, so `.ts` regressions and generated `.astro/types.d.ts`
  drift are still caught.
- **Pro:** Stays on the `latest` supported compiler line; no future major
  jump needed until TS 8.
- **Con — real coverage gap:** `tsc --noEmit` does **not** type-check
  `.astro` template files (only `.ts`). `.astro` checking moved out of the
  build/CI gate until the Astro language-server stack supports TS 7.
  Mitigations: the `.astro` surface is small and mostly static; editor
  feedback still works once the Astro extension supports TS 7; the
  generated `.astro/types.d.ts` is still checked.
- **Con:** Peer-dependency warnings linger on `pnpm install` until
  `@astrojs/check` whitelists `^7.0.0`. Cosmetic only.

## Rollback

`git revert` the upgrade commit and `pnpm install` restores TS 5.9.3 from
the lockfile. To re-enable `astro check`, restore the original
`build`/`check` scripts (they are recorded above).

## Re-enable trigger

Flip `build`/`check` back to `astro check`/`astro check && astro build`
once **all** hold: `@astrojs/check` peer-allows `^7.0.0`, AND a green
`astro check` run on TS 7 is confirmed. At that point this ADR's TS 7
branch of the decision is fully realized.

## Alternatives considered

- **Stay on TS 5.9.3.** Zero risk, but forgoes the Go speedup and keeps the
  repo a major version behind `latest`. Rejected — the speedup is
  material and the compatibility gap is confined to one optional gate.
- **Upgrade to TS 6.0.3 (JS-based, latest pre-Go).** Fully compatible with
  the current Astro checker. Rejected — it would just be replaced by TS 7
  within weeks once Astro catches up, churning `tsconfig.json` twice.
- **Keep `astro check` and force TS 7.** Hard-crash in the language server;
  not viable.
