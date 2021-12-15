import React, { useMemo } from 'react';

import { Button, ButtonProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Capitalize } from '@hoomies/fuel.functions.capitalize';
import { TRoute } from '@hoomies/noak.types.route';
import { getSeoPath } from '@hoomies/noak.functions.route';

export type ItemProps = {
  /**
   * @description An Object containing the route config
   */
  link: TRoute;
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

  const href = useMemo(() => getSeoPath(link, lang), [link?.path, lang]);

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
