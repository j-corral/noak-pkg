import React from 'react';
import { Footer, FooterProps } from './footer';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const TFooter = (args: FooterProps) => (
  <Wrapper resetCSS>
    <Footer {...args} />
  </Wrapper>
);

export const PrimaryFooter = () => <TFooter />;
