import { TDObject } from '@hoomies/fuel.types.object';

export type TRoute = {
  /**
   * @description The display name of the link (shown in menu)
   */
  label: string;
  /**
   * @description The real path of the link
   */
  path: string;
  /**
   * @description If True, the label will not be translated
   */
  literal?: boolean;
  /**
   * @description The seo optimized path of the link for each language
   */
  lang?: TDObject;
  /**
   *  @description The Icon of the link (displayed in menu next to the label)
   */
  icon?: string;
};

export type TRoutes = TRoute[];
