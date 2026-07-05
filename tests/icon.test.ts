import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { rasterizeIcon } from '../src/lib/icon.ts';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);

// PNG IHDR: width and height are big-endian uint32 at byte offsets 16 and 20.
// Color type is byte 25 (2 = truecolor RGB / no alpha, 6 = RGBA).
function readPngHeader(buf: Buffer): {
  readonly width: number;
  readonly height: number;
  readonly colorType: number;
} {
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
    colorType: buf.readUInt8(25),
  };
}

const OPAQUE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#0e0f14"/></svg>';

const ROUNDED_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="8" y="8" width="48" height="48" rx="12" fill="#f3b340"/></svg>';

describe('rasterizeIcon', () => {
  it('emits PNG bytes at the requested square size', async () => {
    const buf = await rasterizeIcon(OPAQUE_SVG, 192);
    assert.ok(buf.subarray(0, 4).equals(PNG_MAGIC), 'should start with PNG magic bytes');
    const { width, height } = readPngHeader(buf);
    assert.equal(width, 192);
    assert.equal(height, 192);
  });

  it('preserves alpha when no background is requested', async () => {
    const buf = await rasterizeIcon(ROUNDED_SVG, 192);
    const { colorType } = readPngHeader(buf);
    assert.equal(colorType, 6, 'PNG with transparency should be color type 6 (RGBA)');
  });

  it('flattens onto an opaque background when one is provided', async () => {
    const buf = await rasterizeIcon(ROUNDED_SVG, 180, { background: '#0e0f14' });
    const { width, height, colorType } = readPngHeader(buf);
    assert.equal(width, 180);
    assert.equal(height, 180);
    assert.equal(colorType, 2, 'flattened PNG should be color type 2 (RGB, no alpha)');
  });
});
