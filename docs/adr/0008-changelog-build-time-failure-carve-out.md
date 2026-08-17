# ADR-0008: Changelog page carve-out from "never breaks a deploy"

- **Status:** Accepted
- **Date:** 2026-07-26
- **Decision owner:** Caico Leung
- **Supersedes (partially):** ADR-0003 (for the `/changelog/` page only)

## Context

ADR-0003 established the build-time fact-fetch pattern for the aic
marketing site: every fact (version, providers) is pulled from the
source repo at build time with a per-fact `FALLBACK_*` constant, so a
parse failure or network blip "never breaks a deploy." The nightly cron
rebuild keeps the live site within ~24h of an aic release.

The new `/changelog/` page (added 2026-07-26) needs the same build-time
fetch — the data lives in `CHANGELOG.md` and the GitHub Releases API,
both in the source repo. Three failure strategies were on the table:

- **(A) Per-fact `FALLBACK_CHANGELOG` constant** — mirror ADR-0003
  exactly. A cached snapshot of the last-known changelog ships when
  both live sources fail.
- **(B) Honest empty state** — render a "couldn't load the changelog"
  note with a link to GitHub Releases when both sources fail.
- **(C) Fail the build** — `loadChangelog()` throws; the whole
  `astro build` fails; the nightly cron surfaces the outage; GitHub
  Pages keeps serving the last good deploy.

## Decision

**Fail the build (C) for the changelog page only.** ADR-0003's "never
breaks a deploy" promise continues to apply to version and providers;
this ADR carves out an exception for the changelog fetch.

Concretely: `loadChangelog()` (`src/data/changelog.ts`) throws when both
`CHANGELOG.md` (via the GitHub contents API) and the GitHub Releases
API (via `api.github.com`) fail or return no parseable entries. Because
`astro build` compiles every page in one job, this also blocks the
version/provider refresh and the rest of the site until the fetch
recovers — visitors see the previous good GitHub Pages deploy in the
meantime.

## Rationale

A changelog is uniquely sensitive to staleness in a way version strings
and provider lists are not:

- The Topbar shows `v{version}` fetched live from `Cargo.toml`. If the
  changelog `FALLBACK_CHANGELOG` constant is stale (the cron also
  failed), the home page advertises **v0.2.0** while the changelog page
  lists **0.1.7** as the latest release. That contradiction is worse
  than a build failure: it actively misleads a visitor cross-referencing
  release notes.
- The GitHub Releases API and the contents API are typically
  co-failing (GitHub incidents take both down), so a `FALLBACK_*`
  constant decays silently rather than catching transient blips.
- A build failure is loud: the cron job goes red, the deploy is
  blocked, and the previous good deploy keeps serving. Silent staleness
  in a shipped page is invisible until a visitor files an issue.

## Consequences

- **Pro:** Stale changelog content can never ship. Visitors cross-
  referencing the Topbar version with the changelog always see
  consistent data.
- **Pro:** The nightly cron surfaces changelog-fetch outages as CI
  failures, prompting investigation rather than silent degradation.
- **Pro:** Visitors are never broken — GitHub Pages retains the last
  good build until the fetch recovers.
- **Con:** A GitHub incident during the cron window blocks _all_ site
  refreshes, not just the changelog. Acceptable: the alternative
  (shipping a contradicting changelog) is worse, and the blast radius
  is bounded by GitHub's own recovery time.
- **Con:** Local dev needs network to render `/changelog/`. Mitigated
  by the same being true for version + providers since ADR-0003.

## Alternatives considered

- **(A) `FALLBACK_CHANGELOG` constant** — rejected; staleness
  contradicts the live Topbar version and is invisible to monitoring.
- **(B) Honest empty state** — rejected; introduces a renderable
  failure surface unique to this page, and a marketing site that
  sometimes shows an empty changelog erodes trust in the rest of the
  content.
