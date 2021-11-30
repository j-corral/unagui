import React from 'react';

import { Text } from '@chakra-ui/react';

export interface CopyrightProps {
  author: string;
  beginYear: number;
  endYear?: number;
  extra?: string;
}

export function Copyright(props: CopyrightProps) {
  const currentYear = props.endYear ?? new Date().getFullYear();
  const endCopyright = currentYear > Number(props.beginYear) ? `-${currentYear}` : '';
  const period = `${props.beginYear}${endCopyright}`;

  return (
    <Text>
      &copy; {period} {props.author} {props.extra ?? ''}
    </Text>
  );
}
