import { TDObject } from '@hoomies/fuel.types.object';
import { FilterObjectProp } from '@hoomies/fuel.functions.filter.object.prop';

import { UnaguiComponents } from './unagui-components';
import { MDXComponents } from './mdx-components';

export type GetComponentsProps = {
  /**
   * @description List of Unagui components to keep
   */
  names?: Array<string>;
  /**
   * @description Get default MDX Components like <p>, <h1>, etc.
   */
  withMDX?: boolean;
};

export function GetComponents({ names = [], withMDX = true }: GetComponentsProps) {
  const filteredUnaguiComponents = FilterObjectProp({ keys: names, item: UnaguiComponents });

  const selectedComponents: TDObject = { ...(withMDX ? GetMDXComponents() : {}), ...filteredUnaguiComponents };

  return selectedComponents;
}

export function GetMDXComponents() {
  return MDXComponents;
}
