import React from 'react';

import { Box, Spacer } from '@chakra-ui/react';

import { Boxer, BoxerProps } from '@hoomies/unagui.components.boxer';

export interface HeaderProps extends BoxerProps {
  /**
   * @description Add a Logo to the header
   */
  logo?: React.ReactElement;
  /**
   * @description Add a Brand to the header
   */
  brand?: React.ReactElement;
  /**
   * @description Add a Menu to the header
   */
  menu?: React.ReactElement;
  /**
   * @description Add custom Elements to the header
   */
  children?: React.ReactNode;
}

export function Header({
  logo = null,
  brand = null,
  menu = null,
  justifyContent = 'space-between',
  dividerPosition = 'bottom',
  children = null,
  ...rest
}: HeaderProps) {
  return (
    <Boxer dividerPosition={dividerPosition} justifyContent={justifyContent} {...rest}>
      {logo && <Box>{logo}</Box>}
      {brand && <Box>{brand}</Box>}
      <Spacer />
      {menu && <Box flexGrow={1}>{menu}</Box>}
      {children}
    </Boxer>
  );
}
