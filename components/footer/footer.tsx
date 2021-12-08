import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { Footer as UFooter, FooterProps as UFooterProps } from '@hoomies/unagui.components.footer';
import { Menu, MenuProps } from '@hoomies/noak.components.navigation.menu';

export interface FooterProps {
  /**
   * @description Define a copyright according to the Copyright component
   */
  copyright?: UFooterProps['copyright'];
  /**
   * @description Define credits according to the Credits component
   */
  credits?: UFooterProps['credits'];
  /**
   * @description Add custom links to the footer
   */
  routes?: MenuProps['routes'];
  /**
   * @description Add custom Elements to the footer
   */
  children?: UFooterProps['children'];
}

export function Footer({
  copyright = { author: '', beginYear: 2021 },
  credits = [],
  routes = [],
  children = null,
  ...rest
}: FooterProps) {
  const { t } = useTranslation();

  if (copyright !== null && copyright.author == '') {
    copyright = {
      author: t('common:copyright.author') ?? 'Noak',
      beginYear: Number(t('common:copyright.year')) ?? new Date().getFullYear(),
      extra: t('common:copyright.extra') ?? '',
    };
  }

  if (credits !== null && credits.length === 0) {
    credits = [
      {
        text: t('common:powered.text') ?? 'Powered By',
        name: t('common:powered.by') ?? 'Noak',
        url: t('common:powered.url'),
      },
      {
        text: t('common:developer.text') ?? 'Developer',
        name: t('common:developer.name') ?? 'Jonathan Corral',
        url: t('common:developer.url'),
      },
      {
        text: t('common:designer.text') ?? 'Designer',
        name: t('common:designer.name') ?? 'Thomas Billet',
        url: t('common:designer.url'),
      },
    ];
  }

  return (
    <>
      <UFooter copyright={copyright} credits={credits} {...rest}>
        {routes?.length > 0 && <Menu routes={routes} />}
        {children}
      </UFooter>
    </>
  );
}
