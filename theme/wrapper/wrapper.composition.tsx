import React from 'react';
import { Wrapper } from './wrapper';
import { Text } from '@chakra-ui/react';

export const BasicWrapper = () => <Wrapper resetCSS />;

export const WrapperWithText = () => {
  return (
    <Wrapper resetCSS>
      <Text>Hello</Text>
    </Wrapper>
  );
};
