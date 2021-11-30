import React from 'react';

import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

/**
 * Properties available in ChakraWrapper
 */
export interface WrapperProps extends ChakraProviderProps {
  /**
   * @description Child elements that will be wrapped by ChakraWrapper
   * @type React.ReactNode
   */
  children?: React.ReactNode;
  /**
   * @description Force wrapper to reset CSS before rendering
   * @type boolean
   */
  resetCSS?: boolean;
  /**
   * @description Theme options override (see Chakra UI doc)
   */
  theme?: Dict;
}

/**
 * Wrap content inside a ChakraProvider object
 *
 * @param params: ChakraWrapperProps
 * @returns React.ReactNode
 */
export const Wrapper = (props: WrapperProps) => {
  const { resetCSS = true } = props;
  return (
    <ChakraProvider resetCSS={resetCSS} theme={props.theme}>
      {props.children}
    </ChakraProvider>
  );
};
