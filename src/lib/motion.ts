/**
 * Motion helpers — central place for GSAP wiring (Q7 Tier 1+2).
 *
 * Hard rule (Q7): every motion respects `prefers-reduced-motion: reduce`.
 * Reduced-motion users see the final state immediately. We use
 * `gsap.matchMedia()` so timelines only construct under
 * `(prefers-reduced-motion: no-preference)` — no orphaned rAF loops,
 * no skipped-but-still-evaluated animations.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Register a motion setup that runs only when the user has not
 * requested reduced motion. The setup receives a gsap.Context so every
 * animation it creates is auto-tracked and reverted on cleanup.
 *
 * Call from inside an Astro `<script>` block scoped to a component.
 */
export function whenMotionOk(setup: (self: gsap.Context) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', setup);

  // Return a revert for hot-reload / SPA-style teardowns.
  return () => mm.revert();
}

/** Set state to the timeline's end immediately — for reduced-motion. */
export function revealStatic(targets: gsap.TweenTarget): void {
  gsap.set(targets, { opacity: 1, y: 0 });
}
