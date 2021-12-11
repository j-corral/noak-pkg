import React from 'react';

import { GetComponents } from '@hoomies/noak.functions.get-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
//import Matter, { GrayMatterFile } from 'gray-matter';
import { TDObject } from '@hoomies/fuel.types.object';

export type MDXConverterProps = {
  source: MDXRemoteSerializeResult;
  //frontMatter?: GrayMatterFile<Matter.Input>['data'];
  componentNames?: Array<string>;
  lazy?: boolean;
};

export function MDXConverter({ source, componentNames, lazy = false }: MDXConverterProps) {
  const selectedComponents: TDObject = GetComponents({ names: componentNames, withMDX: true });

  return (
    <>
      <MDXRemote {...source} components={selectedComponents} lazy={lazy} />
    </>
  );
}
