import React from 'react';

import type { AppProps as DefaultAppProps } from 'next/app';
import { ComponentType } from '@hoomies/noak.types.component';

export interface AppProps extends DefaultAppProps {
  Component: DefaultAppProps['Component'] & ComponentType;
}
