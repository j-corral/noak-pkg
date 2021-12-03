import React from 'react';
import { v4 as genUUID } from 'uuid';
import { Box, HStack } from '@chakra-ui/react';

import { Item, ItemProps } from '@hoomies/noak.components.navigation.item';

export type MenuProps = {
  routes: Array<ItemProps['link']>;
};

export function Menu({ routes }: MenuProps) {
  return (
    <HStack spacing={1}>
      <Box role="group">
        {routes?.map((link) => (
          <Item key={genUUID()} link={link} />
        ))}
      </Box>
    </HStack>
  );
}
