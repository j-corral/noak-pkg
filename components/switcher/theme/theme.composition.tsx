import React from 'react';
import { ThemeSwitcher, ThemeSwitcherProps } from './theme';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const Template = (args: ThemeSwitcherProps) => (
  <Wrapper resetCSS>
    <ThemeSwitcher {...args} />
  </Wrapper>
);

export const Primary = () => <Template />;
export const CustomColor = () => <Template colorScheme="teal.500" />;
export const CustomVariant = () => <Template variant="solid" />;
export const CustomLabel = () => <Template labelLight="Mode clair" labelDark="Mode sombre" />;
