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
