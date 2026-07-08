/**
 * OG image endpoint — build-time 1200×630 card (ADR: og.png was missing,
 * referenced by Base.astro's og:image meta).
 *
 * Same sharp-rasterization approach as the PWA icon endpoint. The card is
 * an on-brand SVG (dark base + amber/mint glows + the favicon mark) turned
 * into an opaque PNG. Site-wide for now; per-page OG is a later refinement.
 *
 * Font note: rendered on the build host (Linux) where `sans-serif` /
 * `monospace` resolve to the host's defaults (e.g. DejaVu) — clean and
 * legible, though not the macOS system face. Colors, layout and the mark
 * carry the brand.
 */
import type { APIRoute } from 'astro';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

function ogSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0e0f14"/>
      <stop offset="1" stop-color="#0a0b0f"/>
    </linearGradient>
    <radialGradient id="amber-glow" cx="82%" cy="8%" r="55%">
      <stop offset="0" stop-color="#f3b340" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#f3b340" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="mint-glow" cx="6%" cy="96%" r="50%">
      <stop offset="0" stop-color="#74c98a" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#74c98a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mark-grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f3b340"/>
      <stop offset="1" stop-color="#e88a4f"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#amber-glow)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#mint-glow)"/>

  <!-- brand mark (favicon, scaled) + wordmark -->
  <g transform="translate(80,92) scale(1.40625)">
    <rect x="2" y="2" width="60" height="60" rx="15" fill="url(#mark-grad)"/>
    <rect x="2.5" y="2.5" width="59" height="59" rx="14.5" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1"/>
    <path fill="#1a1408" d="M28,15 Q28,34 47,34 Q28,34 28,53 Q28,34 9,34 Q28,34 28,15 Z"/>
    <path fill="#1a1408" d="M48,8 Q48,16 56,16 Q48,16 48,24 Q48,16 40,16 Q48,16 48,8 Z"/>
  </g>
  <text x="186" y="150" font-family="sans-serif" font-size="60" font-weight="800" fill="#ece9e1" letter-spacing="-2">aic</text>

  <!-- hero headline -->
  <text x="80" y="312" font-family="sans-serif" font-size="86" font-weight="800" fill="#ece9e1" letter-spacing="-3">AI-powered</text>
  <text x="80" y="404" font-family="sans-serif" font-size="86" font-weight="800" fill="#f3b340" letter-spacing="-3">git commits.</text>

  <!-- sub -->
  <text x="82" y="452" font-family="sans-serif" font-size="27" fill="#8a8f9f">reads your diff  ·  drafts the message  ·  ships it</text>

  <!-- install chip -->
  <rect x="80" y="500" width="332" height="52" rx="26" fill="#f3b340" fill-opacity="0.12"/>
  <text x="104" y="534" font-family="monospace" font-size="24" fill="#f3b340">brew install aic</text>

  <!-- terminal motif (echoes the hero Terminal mockup) -->
  <rect x="772" y="120" width="356" height="312" rx="16" fill="#15171f" stroke="#262a38" stroke-width="1"/>
  <circle cx="800" cy="152" r="6" fill="#e88a4f"/>
  <circle cx="822" cy="152" r="6" fill="#f3b340"/>
  <circle cx="844" cy="152" r="6" fill="#74c98a"/>
  <text x="800" y="214" font-family="monospace" font-size="22" fill="#f3b340">$ aic</text>
  <text x="800" y="252" font-family="monospace" font-size="22" fill="#ece9e1">feat: add og image</text>
  <text x="800" y="290" font-family="monospace" font-size="22" fill="#74c98a">✓ batched + committed</text>
  <text x="800" y="328" font-family="monospace" font-size="22" fill="#8a8f9f">docs: write adr-0006</text>
  <text x="800" y="366" font-family="monospace" font-size="22" fill="#74c98a">✓ committed</text>
</svg>`;
}

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(ogSvg()))
    .flatten({ background: '#0e0f14' })
    .png()
    .toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
