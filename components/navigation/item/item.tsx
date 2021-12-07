import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';
import NextLink, { LinkProps } from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Capitalize } from '@hoomies/fuel.functions.capitalize';

export type ItemProps = {
  link: {
    literal?: boolean;
    label: string;
    path: string;
    icon?: string;
  };
  button?: ButtonProps;
};

export function Item({ link, button }: ItemProps) {
  const { t } = useTranslation();
  const patternRemoveSlashes: RegExp = new RegExp(/^\/+|\/+$/g);

  const pathName = link?.path?.replace(patternRemoveSlashes, '') ?? '';

  const ButtonText = link?.literal ? link.label : t(link.label, {}, { default: pathName });

  return (
    <NextLink href={link.path} passHref>
      <Button
        _focus={{ boxShadow: 'none' }}
        _hover={{ color: 'black' }}
        alignItems="center"
        bg="transparent"
        color="gray.500"
        display="inline-flex"
        fontSize="lg"
        {...button}
      >
        <Capitalize>{ButtonText}</Capitalize>
      </Button>
    </NextLink>
  );
}
