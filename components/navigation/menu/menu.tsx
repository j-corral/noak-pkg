import React, { useMemo } from 'react';
import { v4 as genUUID } from 'uuid';
import { Box, HStack } from '@chakra-ui/react';

import { Item } from '@hoomies/noak.components.navigation.item';
import { TRoutes } from '@hoomies/noak.types.route';

export type MenuProps = {
  routes: TRoutes;
};

export function Menu({ routes }: MenuProps) {
  const items = useMemo(() => routes?.map((link) => <Item key={genUUID()} link={link} />), [routes]);

  return (
    <HStack spacing={1}>
      <Box role="group">{items}</Box>
    </HStack>
  );
}
