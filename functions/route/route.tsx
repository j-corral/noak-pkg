import { TRoute } from '@hoomies/noak.types.route';

/**
 * Get the path that matches the current locale if defined
 * @param link The link object containing the path and the lang properties
 * @param locale current locale
 * @returns the path of the link
 */
export function getSeoPath(link: TRoute, locale: string) {
  let href = link.path;

  if (link?.lang && link?.lang?.hasOwnProperty(locale)) {
    href = link.lang[locale];
  }

  return href;
}

/**
 * Helper to create route object
 * @param {string} label
 * @param {string} path
 * @param {Object} lang
 * @param {boolean} literal
 * @param {string} icon
 * @returns TRoute
 */
export function createRoute(
  label: TRoute['label'],
  path: TRoute['path'],
  literal: TRoute['literal'] = false,
  lang: TRoute['lang'] = {},
  icon: TRoute['icon'] = '',
) {
  return {
    label,
    path,
    lang,
    literal,
    icon,
  };
}
