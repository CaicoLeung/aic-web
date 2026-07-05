# ADR-0003: Build-time fact fetch from the aic source repo

- **Status:** Accepted
- **Date:** 2026-07-05
- **Decision owner:** Caico Leung

## Context

A marketing site has two kinds of content. **Marketing copy** (tagline,
lede, the 6-step labels) lives only on the site and has no drift risk.
**Facts** (version string, provider list, install commands) also exist
in the aic source repo and on crates.io — these are the drift traps.
The original `aic-intro.png` shows the symptom: `v0.1.6` hardcoded,
going stale on every release until someone re-edits.

Three strategies were on the table:

- **(A) All manual** — type everything; re-edit each release.
- **(B) Manual copy + build-time fetch of version only.**
- **(C) Full sync** — automate every fact from the source repo.
- (Mechanism for (C): site-build-time fetch + nightly cron rebuild,
  scheduled bot-commit, cross-repo `repository_dispatch`, or git
  submodule.)

## Decision

**Full sync (C) via site-build-time fetch + parse, with a nightly cron
rebuild and per-fact fallback constants.**

At build time, Astro frontmatter fetches
`raw.githubusercontent.com/CaicoLeung/aic/main/{Cargo.toml,README.md,src/llm.rs}`
and parses:

- `Cargo.toml` `[package] version` — via TOML regex.
- `src/llm.rs` `pub enum Provider { ... }` — variant names → ids/display.
- README install methods — stable URLs via cargo-dist conventions
  (currently kept as constants; low drift).

A nightly scheduled Action on the site repo re-triggers the build so the
live site stays within ~24h of an aic release even if nobody touches the
site repo. Every fact has a `FALLBACK_*` constant so a parse failure or
network blip never breaks the deploy.

## Consequences

- **Pro:** Version on the live site never drifts past the next nightly
  rebuild; no manual edits on release.
- **Pro:** Single repo, single workflow — ADR-0001 stays clean. No bot
  commits in the site git log, no cross-repo `repository_dispatch`
  secret, no submodule.
- **Pro:** Served HTML stays static — fetch happens at build, no client
  cost, no runtime dependency on the source repo.
- **Con:** Brittle to source-file shape changes. Mitigated by per-fact
  fallbacks: a parse miss degrades gracefully to the last hardcoded
  constant rather than failing the build.
- **Con:** Live site is up to ~24h behind a release. Acceptable for a
  marketing site; the release artifacts themselves are immediate via
  cargo-dist.

## Alternatives considered

- **(A) All manual** — rejected; highest drift, exactly the original
  `aic-intro.png` symptom.
- **(B) Version-only fetch** — rejected; the source files are already
  being fetched for version, parsing the provider enum and install
  methods is incremental and removes more drift.
- **Scheduled bot-commit (C2)** — rejected; bot commits pollute the git
  log and require facts.json maintenance.
- **Cross-repo `repository_dispatch` (C3)** — rejected; needs a PAT and
  workflow entries in both repos. Overkill for a single-page site.
- **Git submodule (C4)** — rejected; submodule workflow friction for
  reading three files.
