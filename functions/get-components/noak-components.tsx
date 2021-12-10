import React from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@chakra-ui/react';

import { TDObject } from '@hoomies/fuel.types.object';

const DCOpts = {
  ssr: false,
  loading: () => <Skeleton height="20px" />,
};

export const NoakComponents: TDObject = {
  NoakFooter: dynamic<any>(() => import('@hoomies/noak.components.footer').then((mod) => mod.Footer), DCOpts),
  NoakMenu: dynamic<any>(() => import('@hoomies/noak.components.navigation.menu').then((mod) => mod.Menu), DCOpts),
  NoakMenuItem: dynamic<any>(() => import('@hoomies/noak.components.navigation.item').then((mod) => mod.Item), DCOpts),
  NoakLocaleSwitcher: dynamic<any>(
    () => import('@hoomies/noak.components.switcher.locale').then((mod) => mod.LocaleSwitcher),
    DCOpts,
  ),
  NoakThemeSwitcher: dynamic<any>(
    () => import('@hoomies/noak.components.switcher.theme').then((mod) => mod.ThemeSwitcher),
    DCOpts,
  ),
};
