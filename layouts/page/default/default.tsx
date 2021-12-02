import React from 'react';

import { Stack, StackProps } from '@chakra-ui/react';

export declare interface PageLayoutProps extends StackProps {
  minH?: StackProps['minH'];
  mx?: StackProps['mx'];
  children?: React.ReactNode;
}

export function PageLayout(props: PageLayoutProps) {
  const { minH = '10vh', mx = 'auto', children = null, ...rest } = props;
  return (
    <>
      <Stack minH={minH} mx={mx} {...rest}>
        {children}
      </Stack>
    </>
  );
}
