import React from 'react';

import { Box, BoxProps, Divider, Center, HStack } from '@chakra-ui/react';

export interface BoxerProps extends BoxProps {
  /**
   * @description Add a Divider before or after the container
   */
  divider?: React.ReactElement;
  /**
   * @description Color of the default Divider
   */
  dividerColor?: BoxProps['color'];
  /**
   * @description Height of the default Divider
   */
  dividerHeight?: BoxProps['h'];
  /**
   * @description Width of the default Divider
   */
  dividerWidth?: BoxProps['w'];
  /**
   * @description Vertical position of the default Divider
   */
  dividerPosition?: 'top' | 'bottom';
  /**
   * @description Space between Elements
   */
  spacing?: number | string;
  /**
   * @description Defines how the browser distributes space between and around Elements
   */
  justifyContent?: BoxProps['justifyContent'];
  /**
   * @description Add custom Elements to the container
   */
  children?: React.ReactNode;
}

export function Boxer({
  h = '3rem',
  p = 1,
  spacing = 4,
  justifyContent = 'stretch',
  dividerColor = 'gray.200',
  dividerHeight = '1px',
  dividerWidth = '70vw',
  divider = (
    <Center>
      <Divider w={dividerWidth} borderBottom={dividerHeight} color={dividerColor} orientation="horizontal" />
    </Center>
  ),
  dividerPosition = 'top',
  children = null,
  ...rest
}: BoxerProps) {
  return (
    <>
      {dividerPosition === 'top' && divider}
      <Box minH={h} p={p} {...rest}>
        <HStack spacing={spacing} justifyContent={justifyContent}>
          {children}
        </HStack>
      </Box>
      {dividerPosition === 'bottom' && divider}
    </>
  );
}
