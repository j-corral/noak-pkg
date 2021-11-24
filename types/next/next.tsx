import React from 'react';
import type { NextPage as DefaultNextPage } from 'next';
import type { AppProps as DefaultAppProps } from 'next/app';

import { RootLayoutProps } from '@hoomies/noak.layouts.root';

export type NextPageProps = {
  pageLayout?: React.ComponentType;
  rootProps?: RootLayoutProps;
  name?: string;
  title?: string;
};

export type NextPage<P = {}, IP = P> = DefaultNextPage<P, IP> & NextPageProps;

export interface AppProps extends DefaultAppProps {
  Component: DefaultAppProps['Component'] & NextPageProps;
}
