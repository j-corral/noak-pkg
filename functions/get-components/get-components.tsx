import { TDObject } from '@hoomies/fuel.types.object';
import { FilterObjectProp } from '@hoomies/fuel.functions.filter.object.prop';

import { NoakComponents } from './noak-components';
import { GetComponents as UnaguiGetComponents } from '@hoomies/unagui.functions.get-components';

export type GetComponentsProps = {
  /**
   * @description List of components to keep
   */
  names?: Array<string>;
  /**
   * @description Get default MDX Components like <p>, <h1>, etc.
   */
  withMDX?: boolean;
};

export function GetComponents({ names = [], withMDX = true }: GetComponentsProps) {
  const unaguiNames = names.filter((name) => name.startsWith('Unagui'));
  const filteredUnaguiComponents = UnaguiGetComponents({ names: unaguiNames, withMDX });

  const noakNames = names.filter((name) => name.startsWith('Noak'));
  const filteredNoakComponents = FilterObjectProp({ keys: noakNames, item: NoakComponents });

  let selectedComponents: TDObject = { ...filteredUnaguiComponents, ...filteredNoakComponents };

  return selectedComponents;
}
