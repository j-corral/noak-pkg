import React from 'react';

import { GetComponents } from '@hoomies/noak.functions.get-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
//import Matter, { GrayMatterFile } from 'gray-matter';
import { TDObject } from '@hoomies/fuel.types.object';

export type MDXConverterProps = {
  /**
   * @description Serialized MDX source
   */
  source: MDXRemoteSerializeResult;
  /**
   * @description Names of special components used in the Source (should be generated via ParseMDX method)
   */
  componentNames?: Array<string>;
  /**
   * @description Enable Lazy loading (e.G. next-mdx-remote plugin)
   */
  lazy?: boolean;
  /**
   * @description Add Custom used components on rendering (Third party components)
   */
  customComponents?: TDObject;
};

export function MDXConverter({ source, componentNames, lazy = false, customComponents = {} }: MDXConverterProps) {
  const selectedComponents: TDObject = GetComponents({ names: componentNames, withMDX: true });

  return (
    <>
      <MDXRemote {...source} components={{ ...selectedComponents, ...customComponents }} lazy={lazy} />
    </>
  );
}
