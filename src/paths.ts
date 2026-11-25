// Relative path to the site root, so links work in any folder the site is served from.
export function getRootPath(pathname: string, routePattern: string): string {
  // The 404 page is served at any depth, so a relative path cannot work there.
  if (routePattern === '/404') {
    return import.meta.env.BASE_URL;
  }

  const pathInSite = pathname.slice(import.meta.env.BASE_URL.length);
  const depth = pathInSite.split('/').filter(Boolean).length;
  return depth === 0 ? './' : '../'.repeat(depth);
}
