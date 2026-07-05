import sharp from 'sharp';

export interface RasterizeOptions {
  /** Solid hex color (e.g. '#0e0f14') composited under any alpha. Omittable. */
  readonly background?: string;
}

/**
 * Rasterize an SVG string to PNG bytes at a fixed square size.
 *
 * Used by the PWA icon endpoint to produce installable PNG icons from SVG
 * sources. Pass `background` to flatten transparency onto an opaque color
 * (required for apple-touch-icon, which iOS rejects if it has alpha).
 */
export async function rasterizeIcon(
  svg: string,
  size: number,
  options?: RasterizeOptions,
): Promise<Buffer> {
  const pipeline = sharp(Buffer.from(svg)).resize(size, size);
  const flattened = options?.background
    ? pipeline.flatten({ background: options.background })
    : pipeline;
  return flattened.png().toBuffer();
}
