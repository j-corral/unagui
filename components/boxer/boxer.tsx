import React from 'react';

import { Box, BoxProps, Divider, Center, HStack } from '@chakra-ui/react';

export interface BoxerProps extends BoxProps {
  divider?: React.ReactElement;
  dividerPosition?: 'top' | 'bottom';
  dividerWidth?: BoxProps['w'];
  spacing?: number | string;
  justifyContent?: BoxProps['justifyContent'];
  localeSwitcher?: React.ReactElement;
  themeSwitcher?: React.ReactElement;
}

export function Boxer(props: BoxerProps) {
  const {
    h = '3rem',
    p = 1,
    spacing = 4,
    dividerWidth = '70vw',
    divider = (
      <Center>
        <Divider w={dividerWidth} borderBottom="1px" color="gray.500" orientation="horizontal" />
      </Center>
    ),
    dividerPosition = 'top',
    children = null,
    ...rest
  } = props;

  return (
    <>
      {dividerPosition === 'top' && divider}
      <Box minH={h} p={p} {...rest}>
        <HStack spacing={spacing} justifyContent={props.justifyContent}>
          {children}
          {props.localeSwitcher && <Box>{props.localeSwitcher}</Box>}
          {props.themeSwitcher && <Box>{props.themeSwitcher}</Box>}
        </HStack>
      </Box>
      {dividerPosition === 'bottom' && divider}
    </>
  );
}
