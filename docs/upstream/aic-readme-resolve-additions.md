# Upstream README additions — `aic resolve` (v0.3.0)

**Target repo:** `CaicoLeung/aic` (the CLI source — **not** this `aic-web` repo).
**Why:** v0.3.0 shipped `aic resolve` in code + CHANGELOG, but the README never
documented it. The aic-web `/resolve/` page links here as its interim reference
(Option 1, ADR-0006-native). When these land, swap the page's interim release
link → README link and the homepage `COMMANDS` table becomes eligible for an
`aic resolve` row.

Apply the four additions below to `README.md` in the aic repo, matching its
existing voice. Verified against `cli.rs` (`Commands::Resolve`) and
`main.rs` (`run_resolve_workflow_impl`) as of v0.3.0 (2026-07-29).

---

## 1. Features list — add one bullet

After the existing bullets (Multi-provider / Batch commits / …):

```md
- **Conflict resolution** — mid-merge? `aic resolve` proposes per-file
  resolutions you review and approve, then finalizes the merge
```

## 2. Usage table — add one row

```md
| `aic resolve` | Resolve git merge conflicts in the working tree via the LLM. Detects a conflicted repo, proposes per-file resolutions for your review, and finalizes the merge when every file is resolved. |
```

## 3. How It Works — add a resolve branch

Under the existing commit/batch diagram:

```md
aic resolve
└─ conflicted repo? → for each conflicted file:
LLM proposes a resolution → validate markers (retry once)
→ review diff → apply? [y/n] → git add
→ finalize (git --continue) when all resolved
```

## 4. New subsection — "Resolving merge conflicts"

Place after the **How It Works** section:

```md
## Resolving merge conflicts

Run `aic resolve` when your repo is mid-merge. It reads each conflicted file,
proposes a marker-free resolution, shows you the diff, and asks `apply?` per
file. Approve the ones you trust; the rest stay untouched. When nothing is left
unmerged, it runs the merge's `--continue` for you.

You can also run plain `aic` in a conflicted repo — it notices and offers to
hand off to resolve, and a commit guard blocks any commit that still carries
conflict markers.

**v1 limits:** `aic resolve` handles conflicted **merge** state — a rebase or
`am` in flight is detected and refused. Binary, oversized, and delete/modify
conflicts are skipped with a reason for you to resolve by hand. Finalize is
all-or-nothing: `--continue` blocks on any unmerged path, and the hand-off tells
you exactly what's left.
```

---

## After the README PR merges

In **this** repo (`aic-web`):

1. `src/pages/resolve.astro` — change the verdict CTA link from the v0.3.0
   release URL to the README anchor (e.g. `#resolving-merge-conflicts`).
2. `src/config/site.ts` `COMMANDS` — optionally add an `aic resolve` row
   (ownership now consistent; the README is the source of truth).
