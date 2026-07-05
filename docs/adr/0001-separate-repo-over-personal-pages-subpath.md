# ADR-0001: Separate `aic-web` repo over a subpath of the personal Pages site

- **Status:** Accepted
- **Date:** 2026-07-05
- **Decision owner:** Caico Leung

## Context

The aic CLI needs a marketing site on GitHub Pages. Two deployment
topologies were on the table:

1. **Subpath of the personal user/organization Pages repo** — place the
   site under `CaicoLeung.github.io/aic/`, which would have to live
   alongside whatever else the personal homepage becomes.
2. **Separate project repo** — `aic-web` deployed to
   `caicoleung.github.io/aic-web/` from its own `main` branch.

`CaicoLeung.github.io` is a GitHub **user Pages** repo — anything at its
root is served at the bare `https://caicoleung.github.io/` and _becomes_
the personal homepage. Putting the aic site at its root spends the
username domain on a single project.

## Decision

Create a **separate `aic-web` project repo** and deploy from its own
`main` via GitHub Actions.

## Consequences

- **Pro:** The personal Pages repo stays available for an actual
  personal homepage later.
- **Pro:** aic owns its URL cleanly without base-path gymnastics inside
  the personal repo.
- **Pro:** ADR-0003's nightly cron rebuild workflow lives entirely in
  one repo; no cross-repo dispatch.
- **Con:** The site is served under `/aic-web/` instead of a clean root.
  Acceptable for an OSS marketing page (visitors arrive via the README
  link, not by typing the URL). A custom domain (`aic.caicoleung.dev`)
  can be wired later via CNAME without restructuring.
- **Con:** One extra repo to maintain. Small given the scope.

## Alternatives considered

- **Root of personal Pages** — rejected; spends the username domain.
- **Subpath of personal Pages** — rejected; entangles two unrelated
  sites in one repo and complicates the build-time fetch workflow.
