import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { rasterizeIcon } from '@/lib/icon';

const PUBLIC_DIR = fileURLToPath(new URL('../../../public/', import.meta.url));

interface IconVariant {
  readonly size: number;
  readonly source: 'favicon.svg' | 'maskable.svg';
  readonly background?: string;
}

const VARIANTS: Record<string, IconVariant> = {
  'icon-192': { size: 192, source: 'favicon.svg' },
  'icon-512': { size: 512, source: 'favicon.svg' },
  'maskable-192': { size: 192, source: 'maskable.svg' },
  'maskable-512': { size: 512, source: 'maskable.svg' },
  'apple-touch-icon': {
    size: 180,
    source: 'favicon.svg',
    background: '#0e0f14',
  },
};

export const getStaticPaths = (() =>
  Object.keys(VARIANTS).map((icon) => ({ params: { icon } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const key = params.icon;
  if (key === undefined || !(key in VARIANTS)) {
    return new Response('Not found', { status: 404 });
  }
  const variant = VARIANTS[key];
  const svg = await readFile(`${PUBLIC_DIR}${variant.source}`, 'utf-8');
  const png = await rasterizeIcon(
    svg,
    variant.size,
    variant.background ? { background: variant.background } : undefined,
  );
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
