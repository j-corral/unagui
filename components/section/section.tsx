import React from 'react';

import { Flex, FlexProps } from '@chakra-ui/react';

export interface SectionProps extends FlexProps {
  /**
   * @description Height of the Section
   * @type FlexProps['height'];
   * @default "100vh"
   */
  height?: FlexProps['height'];
  /**
   * @description Width of the Section
   * @type FlexProps['width'];
   * @default "100vw"
   */
  width?: FlexProps['width'];
  /**
   * @description container items axis
   * @type FlexProps['direction']
   * @default "row"
   */
  direction?: FlexProps['direction'];
  /**
   * @description The CSS `flex-wrap` property.
   * @type FlexProps['wrap']
   * @default "wrap"
   */
  wrap?: FlexProps['wrap'];
  /**
   * @description Horizontal alignment of children
   * @type FlexProps['justify']
   * @default "center"
   */
  justify?: FlexProps['justify'];
  /**
   * @description Vertical alignment of children
   * @type FlexProps['align']
   * @default "stretch"
   */
  align?: FlexProps['align'];
  /**
   * @description Background color of the Section
   * @type string
   * @default "white"
   */
  bgColor?: string;
}

export function Section(props: SectionProps) {
  const {
    height = '100vh',
    width = '100vw',
    direction = 'row',
    wrap = 'wrap',
    justify = 'center',
    align = 'center',
    bgColor = 'white',
    ...rest
  } = props;

  return (
    <Flex
      height={height}
      width={width}
      direction={direction}
      wrap={wrap}
      justify={justify}
      align={align}
      bgColor={bgColor}
      {...rest}
    >
      {props.children}
    </Flex>
  );
}
