import React from 'react';
import { Hero, HeroProps } from './hero';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { Box, Image, Stack, HStack, VStack } from '@chakra-ui/react';

const Template = (args: HeroProps) => (
  <Wrapper resetCSS>
    <Hero {...args} />
  </Wrapper>
);

export const Primary = () => <Template />;
export const WithText = () => <Template title="I am a Hero!" />;
export const CustomSize = () => <Template title="Custom Size" fontSize="50px" />;
export const JustifyLeft = () => <Template title="Left" justifyContent="left" />;
export const JustifyCenter = () => <Template title="Center" justifyContent="center" />;
export const JustifyRight = () => <Template title="Right" justifyContent="right" />;
export const CustomGradient = () => <Template title="Custom Gradient" colorBegin="red" colorEnd="blue" />;
export const CustomBackgroundColor = () => (
  <Template title="Custom BG Color" bgColor="purple.900" colorBegin="gray.50" colorEnd="pink.400" />
);

export const WithChildren = () => (
  <Template title="Hello You!" bgColor="purple.900" colorBegin="white" colorEnd="pink.400">
    <Box maxW="50vw" maxH="100vh" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1637088474386-af8895dd0921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2215&q=80"
        alt="Hello"
      />
    </Box>
  </Template>
);
