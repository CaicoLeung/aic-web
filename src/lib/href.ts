/**
 * Normalize an Astro `BASE_URL` to a trailing slash so deep links can be
 * derived base-path-safely (`${baseHref(BASE_URL)}changelog/`). Shared by
 * every header/footer so the trailing-slash rule lives in one place.
 */
export function baseHref(baseUrl: string): string {
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}
