/**
 * Palette + agent preset data integrity check.
 *
 * Verifies the v0.5.0 showcase data (site.ts) matches the source repo's
 * factual claims: 17 commit types with WCAG-safe hex colors, 4 CLI-agent
 * presets with stream/batch reasoning.
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { COMMIT_TYPE_PALETTE, AGENT_PRESETS } from '../src/config/site.ts';

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
  it('has exactly 4 presets', () => {
    assert.equal(AGENT_PRESETS.length, 4);
  });

  it('all reasoning values are stream or batch', () => {
    for (const a of AGENT_PRESETS) {
      assert.ok(
        a.reasoning === 'stream' || a.reasoning === 'batch',
        `${a.id}: invalid reasoning "${a.reasoning}"`,
      );
    }
  });

  it('ids are unique', () => {
    const ids = AGENT_PRESETS.map((a) => a.id);
    assert.equal(new Set(ids).size, ids.length, 'duplicate agent ids');
  });
});
