import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

/**
 * Properties available in ChakraWrapper
 */
export interface WrapperProps {
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
  theme?: typeof extendTheme;
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
