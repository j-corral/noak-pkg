import React from 'react';

import { Button, ButtonProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Capitalize } from '@hoomies/fuel.functions.capitalize';
import { TDObject } from '@hoomies/fuel.types.object';

export type ItemProps = {
  /**
   * @description An Object containing the route config
   */
  link: {
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
  /**
   * @description The appearance of the link (see Chakra UI Button docs)
   */
  button?: ButtonProps;
  /**
   * @description If True, the link will be opened in a new tab
   */
  isExternal?: boolean;
};

/**
 * @description Default appearance of the Button link
 */
export const DefaultButtonProps = {
  alignItems: 'center',
  bg: 'transparent',
  color: 'gray.500',
  display: 'inline-flex',
  fontSize: 'lg',
  _focus: { boxShadow: 'none' },
  _hover: { color: 'black' },
};

export function Item({ link, button = DefaultButtonProps, isExternal = false }: ItemProps) {
  const { t, lang } = useTranslation();
  const patternRemoveSlashes: RegExp = new RegExp(/^\/+|\/+$/g);

  const pathName = link?.path?.replace(patternRemoveSlashes, '') ?? '';

  const ButtonText = link?.literal ? link.label : t(link.label, {}, { default: pathName });

  const href = getSeoPath(link, lang);

  return (
    <>
      <Button {...button}>
        <NextLink href={href} passHref>
          <Link href={href} _hover={{ textDecoration: 'none' }} isExternal={isExternal}>
            <Capitalize>{ButtonText}</Capitalize>
          </Link>
        </NextLink>
      </Button>
    </>
  );
}

/**
 * Get the path that matches the current locale if defined
 * @param link The link object containing the path and the lang properties
 * @param locale current locale
 * @returns the path of the link
 */
export function getSeoPath(link: ItemProps['link'], locale: string) {
  let href = link.path;

  if (link?.lang && link?.lang?.hasOwnProperty(locale)) {
    href = link.lang[locale];
  }

  return href;
}
