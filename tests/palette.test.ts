/**
 * Palette + agent preset data integrity check.
 *
 * Verifies the showcase data (site.ts) matches the source repo's factual
 * claims: 17 commit types with WCAG-safe hex colors, 11 CLI-agent presets
 * with stream/batch reasoning.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { COMMIT_TYPE_PALETTE, AGENT_PRESETS } from '../src/config/site.ts';
import { messagesByLocale } from '../src/i18n/messages/index.ts';

// ── WCAG relative luminance + contrast (W3C formula) ──
// Mirrors the source repo's all_colors_pass_wcag_aa_large_on_both_themes
// guard so a palette edit can't silently break readability here either.
function relativeLuminance(hex: string): number {
  const chan = (off: number) => {
    const c = parseInt(hex.slice(off, off + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * chan(1) + 0.7152 * chan(3) + 0.0722 * chan(5);
}

function contrastRatio(fg: string, bg: string): number {
  const [l1, l2] = [relativeLuminance(fg), relativeLuminance(bg)].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}

describe('commit-type palette', () => {
  it('has exactly 17 types', () => {
    assert.equal(COMMIT_TYPE_PALETTE.length, 17);
  });

  it('all colors are valid 6-digit hex', () => {
    for (const c of COMMIT_TYPE_PALETTE) {
      assert.match(c.color, /^#[0-9a-f]{6}$/, `${c.type}: ${c.color} is not valid hex`);
    }
  });

  it('types are unique', () => {
    const types = COMMIT_TYPE_PALETTE.map((c) => c.type);
    assert.equal(new Set(types).size, types.length, 'duplicate commit types');
  });

  it('every color clears WCAG AA Large (3:1) on light (#ffffff) and dark (#0d1117)', () => {
    // Spec #116: single static palette, no theme detection.
    for (const c of COMMIT_TYPE_PALETTE) {
      const onLight = contrastRatio(c.color, '#ffffff');
      const onDark = contrastRatio(c.color, '#0d1117');
      assert.ok(
        onLight >= 3,
        `${c.type} ${c.color}: ${onLight.toFixed(2)}:1 on white < 3:1`,
      );
      assert.ok(
        onDark >= 3,
        `${c.type} ${c.color}: ${onDark.toFixed(2)}:1 on dark < 3:1`,
      );
    }
  });
});

describe('agent presets', () => {
  it('has exactly 11 presets', () => {
    assert.equal(AGENT_PRESETS.length, 11);
  });

  it('matches source Encoding::streams_reasoning_live classification', () => {
    // Spec #118 + #145: ClaudeStreamJson + PiStreamJson stream (omp is a pi
    // fork reusing PiStreamJson); Codex, OpenCode, and the six v0.5.5
    // print-mode presets (gemini, cursor, windsurf, copilot, trae, qwen)
    // are batch (answer arrives whole, no live stream).
    const byId = Object.fromEntries(AGENT_PRESETS.map((a) => [a.id, a.reasoning]));
    assert.equal(byId.claude, 'stream', 'claude must stream (ClaudeStreamJson)');
    assert.equal(byId.pi, 'stream', 'pi must stream (PiStreamJson)');
    assert.equal(byId.omp, 'stream', 'omp must stream (pi fork, PiStreamJson)');
    for (const id of [
      'codex',
      'opencode',
      'gemini',
      'cursor',
      'windsurf',
      'copilot',
      'trae',
      'qwen',
    ]) {
      assert.equal(byId[id], 'batch', `${id} must batch (print mode)`);
    }
  });
  it('ids are unique', () => {
    const ids = AGENT_PRESETS.map((a) => a.id);
    assert.equal(new Set(ids).size, ids.length, 'duplicate agent ids');
  });
  it('every locale presets roster matches AGENT_PRESETS (count, order, names)', () => {
    // ADR-0015 keeps the locale cards hand-maintained narrative; this pins
    // each roster to the canonical preset table so no locale drifts silently.
    const roster = AGENT_PRESETS.map((p) => p.displayName);
    for (const [locale, mod] of Object.entries(messagesByLocale)) {
      assert.deepEqual(
        mod.agents.presets.items.map((i) => i.h),
        roster,
        `${locale} agents.presets.items drifted from AGENT_PRESETS`,
      );
    }
  });
});
