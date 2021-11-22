import React from 'react';
import { Wrapper } from '@hoomies/unagui.theme.wrapper';
import { Heading } from '@chakra-ui/react';

import { Section, SectionProps } from './section';

const Template = (args: SectionProps) => (
  <Wrapper resetCSS>
    <Section {...args} />
  </Wrapper>
);

export const Primary = () => <Template />;

export const WithText = ({ text = 'Hello', color = 'gray.500', ...rest }) => {
  return (
    <Template {...rest}>
      <Heading color={color}>{text}</Heading>
    </Template>
  );
};

export const WithBGColor = () => <Template bgColor="purple.900"></Template>;
export const WithBGColorAndText = () => <WithText bgColor="purple.900" color="white"></WithText>;

export const WithBGImg = (props: SectionProps) => {
  const {
    bgImage = 'https://images.unsplash.com/photo-1637196268676-ccfe49d8ba1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    ...rest
  } = props;
  return (
    <Template bgImage={bgImage} {...rest}>
      {props.children}
    </Template>
  );
};

export const WithBGImgAndText = () => (
  <WithBGImg color="white">
    <Heading>Hello</Heading>
  </WithBGImg>
);
