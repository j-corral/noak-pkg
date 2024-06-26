import React from 'react';
import Head from 'next/head';

import { Box, BoxProps, Center, Flex, FlexProps } from '@chakra-ui/react';

//import Header from '~components/header/Default';
//import Footer from '~components/footer/Default';

export declare interface RootLayoutProps extends FlexProps {
  disabled?: boolean;
  w?: FlexProps['w'];
  height?: FlexProps['h'];
  direction?: FlexProps['direction'];
  header?: React.ReactElement;
  footer?: React.ReactElement;
  children?: React.ReactElement;
  frame?: BoxProps;
}

export function RootLayout(props: RootLayoutProps) {
  const {
    disabled = false,
    w = '100vw',
    height = '100vh',
    direction = 'column',
    header = false,
    footer = false,
    frame = {},
    ...rest
  } = props;

  if (disabled) {
    return <>{props.children}</>;
  }

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <Box m={0} p={0} {...frame}>
        <Center>
          <Flex m={0} p={0} w={w} h={height} direction={direction} {...rest}>
            <Box as="header">{header}</Box>
            <Box as="main">{props.children}</Box>
            <Box as="footer">{footer}</Box>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
