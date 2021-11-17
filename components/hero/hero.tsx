import React from 'react';

import { Flex, Heading, HStack } from '@chakra-ui/react';
import { TReactElement } from '@hoomies/fuel.types.react';

export interface HeroProps {
  /**
   * @description Add children Elements inside the section
   * @type TReactElement
   * @default undefined
   */
  children?: TReactElement;
  /**
   * @description Title to display
   * @type string
   * @default "Hello World!"
   */
  title?: string;
  /**
   * @description Size of Title
   * @type string
   * @default "6vw"
   */
  fontSize?: string;
  /**
   * @description Height of the Hero Component
   * @type string
   * @default "100vh"
   */
  height?: string;
  /**
   * @description Horizontal alignment of the Title
   * @type string
   * @default "center"
   */
  justifyContent?: 'left' | 'center' | 'right';
  /**
   * @description Vertical alignment of the Title
   * @type string
   * @default "center"
   */
  verticalAlign?: 'flex-start' | 'center' | 'flex-end';
  /**
   * @description Left gradient Color of the Title
   * @type string
   * @default "#7928CA"
   */
  colorBegin?: string;
  /**
   * @description Right gradient Color of the Title
   * @type string
   * @default "#FF0080"
   */
  colorEnd?: string;
  /**
   * @description Background color of the section
   * @type string
   * @default "white"
   */
  bgColor?: string;
}

export function Hero(props: HeroProps) {
  const {
    title = 'Hello World!',
    fontSize = '6vw',
    height = '100vh',
    justifyContent = 'center',
    verticalAlign = 'center',
    colorBegin = '#7928CA',
    colorEnd = '#FF0080',
    bgColor = 'white',
  } = props;

  const gradient = `linear(to-l, ${colorEnd}, ${colorBegin})`;

  return (
    <Flex flexDirection="column" justifyContent={verticalAlign} height={height} bgColor={bgColor}>
      <HStack spacing="5vw" justify="center">
        <Heading bgClip="text" bgGradient={gradient} fontSize={fontSize} display="block" textAlign={justifyContent}>
          {title}
        </Heading>
        {props.children}
      </HStack>
    </Flex>
  );
}
