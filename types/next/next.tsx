import React from 'react';
import type { NextPage as DefaultNextPage } from 'next';
import type { AppProps as DefaultAppProps } from 'next/app';

export type NextPageProps = {
  layout?: React.ComponentType;
  name?: string;
};

export type NextPage<P = {}, IP = P> = DefaultNextPage<P, IP> & NextPageProps;

export interface AppProps extends DefaultAppProps {
  Component: DefaultAppProps['Component'] & NextPageProps;
}
