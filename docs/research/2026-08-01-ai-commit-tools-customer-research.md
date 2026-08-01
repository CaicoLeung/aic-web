# Customer Research — AI commit tools / aic (2026-08-01)

**Method:** Mode 2 digital watering hole + Mode 1 analysis of project-owned surfaces.
**Scope:** Validate pains, language, and positioning for aic (AI git commit CLI).
**Confidence legend:** 🟢 High (3+ independent sources) · 🟡 Medium (2 sources / one segment) · 🟠 Low (single source).

## Sources

| Source                                                        | Coverage                                          | Window            | Bias                                              |
| ------------------------------------------------------------- | ------------------------------------------------- | ----------------- | ------------------------------------------------- |
| CaicoLeung/aic GitHub (own)                                   | 1 external user (bug #15, PR #16)                 | 2026-07           | Tiny sample                                       |
| Nutlope/aicommits GitHub issues                               | 167 issues (64 feature / 61 bug); 22 read in full | 2023-02 → 2026-07 | Early Node/OpenAI-era users; activity peaked 2023 |
| lobste.rs "Conventional Commits makes me sad"                 | full thread                                       | 2025-07           | Tech-elite, anti-CC bias                          |
| Hacker News (Commitgen launch; AI commit-message discussions) | multiple threads                                  | 2025-11 → 2026    | Technical, skeptical                              |
| Reddit                                                        | ⚠️ blocked (SSRF); indirect references only       | —                 | —                                                 |

**Guardrail note:** only 1-2 independent first-party customers exist; findings below are market-level signal, not aic customer validation.

## Top Themes (ranked by frequency × intensity)

### 1. Setup/API-key friction is the #1 onboarding killer 🟢

7+ independent aicommits issues (#79, #5, #43, #74, #329, #331/332, #344, #60), spanning 2023-2026.

- "I don't understand how to set the key" — #79
- "I tried both but it didn't work" — #79
- "The error appears to be `insufficient_quota`… but you need to handle this (or any other) errors" — #5
- Windows users repeatedly stuck on env vars (#43, #67, #68, #344).

Implication: aic's `aic setup` wizard + "key never leaves your machine" is a real differentiator; errors must be actionable.

### 2. Users want control over the message: edit / regenerate / non-interactive 🟢

#24 (10 comments), #46, #61 (7 comments), #18, #2, #66, #292.

- "A lot of times, AI comes up with something that is _mostly_ good, but may need one or two small corrections" — #24
- "in some repos, you are not too critical of the commit message but still need to provide meaningful ones" — #61
- Proposed prompt: "Would you like to use this commit message? (Y / n / r / e)" — #46

Implication: aic lacks edit/regenerate/multiple-candidates (already conceded on vs page). Real product gap; also a scripting/automation demand (-y / --no-verify).

### 3. Git hooks: users want integration AND bypass 🟡→🟢

- aic's own #15 (external user): "your husky / prettier / commit-msg hooks are silently skipped on every commit" (fixed v0.3.7).
- aicommits #72 (hook mode design), #313 (`--no-verify`), #296 (hook fails on linter), #314 (worktree hooks).

Implication: aic's explicit-run model must be clearly documented as hook-safe; `--no-verify`-style flags are real demand.

### 4. Conventional Commits are contested (love/hate) 🟡

- "17 commits in a row that say 'fix' or literally that one guy that typed '.' for every commit message" — lobste.rs
- "I had conventional commits forced on a team… Not one single time did I ever have a moment where I was grateful" — lobste.rs
- "what counts as a chore?" / `chore: initial commit` noise — lobste.rs

Implication: lead with the outcome (atomic, clean history), not the convention itself. CC-only has a vocal anti segment.

### 5. Lazy commit messages are the universal pain 🟢

- "I kept writing lazy commit messages like 'fix stuff' and 'update'" — HN Commitgen launch
- "my commit messages usually range from detailed prose… to 'ashdhdhgsgsg'" — lobste.rs
- "the stream of 23 commits with the message 'WIP'… 'fix ci', 'fix ci (for real)', 'fix ci (cmon now)'" — lobste.rs

Implication: core value prop validated; emotional driver is guilt/quality, not just speed.

### 6. AI messages repeat the diff instead of the WHY 🟡

- "commit messages that repeat what is done in code, but not WHY" — alt-HN
- "Overly verbose… It wastes time." — alt-HN
- "Commit messages are for other developers." — alt-HN

Implication: prompts must force why + concision; live reasoning + review-before-apply are trust signals.

### 7. Fine-grained/atomic commits: wanted but hard — validates hunk batching 🟡→🟢

- "making fine-grained commits with short messages will help in the long run. No amount of prose in commit messages can actually organize the commits." — alt-HN
- "the AI's summary completely ignored a change I would recommend splitting out into a separate (third) commit" — alt-HN
- "most people mass commit a bunch of (mostly unrelated) changes at once… clobber incoming merge conflicts" — lemmy

Implication: strongest external validation for aic's hunk-level batching + exact-partition validation.

### 8. OSS maintenance anxiety = trust issue 🟡

- "is this repo dead?" — aicommits #289 (8 comments)
- "I get the feeling the author has abandoned this repo" — #309
- "Some software is done… I use this app every day still." — #289
- "Agents have complete Git mastery on their own." — #289 (counter-view)

Implication: show momentum (changelog, releases, CI, responsiveness); address "AI agents replace this" objection.

### 9. Merge-conflict pain is emotional 🟡

- "I spent 3 days and nights cleaning 60 files in the projects. 60 files!" — devRant
- "…mostly because they can't make heads or tails of the diffs" — lemmy

### 10. Windows is a real market 🟡→🟢

aicommits #43, #68 (WSL2), #7, #67 (PowerShell), #344 (Windows + LM Studio); aic ships Windows installer + CI matrix.

## Money Quotes (VOC bank)

- "17 commits in a row that say 'fix'… or that one guy that typed '.' for every commit message"
- "23 commits with the message 'WIP'… 'fix ci', 'fix ci (for real)', 'fix ci (cmon now)'"
- "I don't understand how to set the key"
- "AI comes up with something that is _mostly_ good, but may need one or two small corrections"
- "the AI's summary completely ignored a change I would recommend splitting out into a separate (third) commit"
- "commit messages that repeat what is done in code, but not WHY"
- "fine-grained commits with short messages will help in the long run"
- "I spent 3 days and nights cleaning 60 files. 60 files!"

## Implications for aic

1. Keep hunk batching as the #1 differentiator (best-validated).
2. Feature `aic setup` wizard + error hand-offs (setup friction is the market's top killer).
3. Position "atomic, clean history" (outcome) over "Conventional Commits" (contested).
4. Consider product gaps: edit/regenerate message, non-interactive/--no-verify flags.
5. Show momentum + reviewability as trust signals.
6. Surface cross-platform (esp. Windows) more in copy/SEO.
