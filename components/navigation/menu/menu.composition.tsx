import React from 'react';
import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { Menu, MenuProps } from './menu';

const Template = (args: MenuProps) => (
  <Wrapper resetCSS>
    <Menu {...args} />
  </Wrapper>
);

const routes = [
  {
    literal: true,
    label: 'Home',
    path: '/',
    icon: '',
  },
  {
    label: 'menu:page.legal',
    path: '/legal',
    lang: { fr: '/mentions-legales', en: '/en/legal-notice' },
  },
];

export const Primary = () => <Template routes={routes} />;
