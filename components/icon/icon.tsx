import React from 'react';
import { Icon as ChakraIcon, IconProps as ChakraIconProps } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

export interface IconProps {
  /**
   * @description Icon name to use
   * @type {string}
   */
  name?: string;
  /**
   * @description Icon font family
   * @type {string}
   * @default "tao"
   */
  family?: string;
  /**
   * @description Icon style
   * @type {string}
   * @default "regular"
   */
  style?: 'light' | 'regular' | 'bold';
  /**
   * @description Icon variant type
   * @type {string}
   * @default "straight"
   */
  variant?: 'straight' | 'rounded';
  /**
   * @description ViewBox dimension of the SVG Frame
   * @type {string}
   * @default "0 0 200 200"
   */
  viewBox?: string;
  /**
   * @description default Chakra Icons props
   * @type ChakraIconProps
   */
  chakra?: ChakraIconProps;
}

function getIconData(params: IconProps) {
  const data = {
    family: 'tao',
    style: 'regular',
    variant: 'rounded',
    name: 'add',
    path: [
      'M12,1A11,11,0,1,1,1,12,11,11,0,0,1,12,1m0-1A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm4.41,11.5H12.5V7.59a.5.5,0,0,0-1,0V11.5H7.59a.5.5,0,0,0,0,1H11.5v3.91a.5.5,0,0,0,1,0V12.5h3.91a.5.5,0,0,0,0-1Z',
    ],
  };

  if (params.name !== data.name) {
    return {
      path: [],
    };
  }

  return data;
}

export function Icon(props: IconProps) {
  const { name = 'add', family = 'tao', style = 'regular', variant = 'straight', chakra = {}, ...rest } = props;
  const ChakraIconProps = {
    viewBox: '0 0 24 24',
    boxSize: 200,
    ...chakra,
  };

  const data = getIconData(props);

  return (
    <>
      {data?.path?.length > 0 ? (
        <ChakraIcon {...ChakraIconProps}>
          {data.path?.map((shape, i) => (
            <path fill="currentColor" key={i} d={shape} />
          ))}
        </ChakraIcon>
      ) : (
        <WarningTwoIcon {...ChakraIconProps} />
      )}
    </>
  );
}
