import React from 'react';

import { Box, Spacer } from '@chakra-ui/react';

import { Boxer, BoxerProps } from '@hoomies/unagui.components.boxer';

export interface HeaderProps extends BoxerProps {
  logo?: React.ReactElement;
  brand?: React.ReactElement;
  menu?: React.ReactElement;
}

export function Header(props: HeaderProps) {
  const { dividerPosition = 'bottom', ...rest } = props;

  return (
    <Boxer dividerPosition={dividerPosition} {...rest}>
      {props.logo && <Box>{props.logo}</Box>}
      {props.brand && <Box>{props.brand}</Box>}
      <Spacer />
      {props.menu && <Box flexGrow={1}>{props.menu}</Box>}
    </Boxer>
  );
}
