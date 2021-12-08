import React from 'react';

import { Box, Heading, HeadingProps } from '@chakra-ui/react';
import { Section, SectionProps } from '@hoomies/unagui.components.section';

export interface HeroProps extends HeadingProps, GradientProps {
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
   * @description Text alignment of Title
   * @type HeadingProps["textAlign"]
   * @default "center"
   */
  textAlign?: HeadingProps['textAlign'];
  /**
   * @description Padding around the Title
   * @type HeadingProps['p']
   * @default "5"
   */
  p?: HeadingProps['p'];
  /**
   * @description All the Section properties from the Section Component
   * @type SectionProps
   * @link https://bit.dev/hoomies/unagui/components/section
   */
  section?: SectionProps;
}

/**
 * @description Gradient Properties
 */
export interface GradientProps {
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
}

export function GradientSet({ colorBegin = '', colorEnd = '' }: GradientProps) {
  const gradient = `linear(to-l, ${colorEnd}, ${colorBegin})`;
  return gradient;
}

export function Hero({
  title = 'Hello World!',
  fontSize = '6vw',
  colorBegin = '#7928CA',
  colorEnd = '#FF0080',
  textAlign = 'center',
  p = 5,
  section = {},
  children = null,
  ...rest
}: HeroProps) {
  const sectionProps = {
    justify: textAlign,
    ...section,
  };

  return (
    <Section {...sectionProps}>
      {title && (
        <Box>
          <Heading
            bgClip="text"
            bgGradient={GradientSet({ colorBegin, colorEnd })}
            fontSize={fontSize}
            display="block"
            p={p}
            {...rest}
          >
            {title}
          </Heading>
        </Box>
      )}
      {children}
    </Section>
  );
}
