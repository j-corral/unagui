import React from 'react';

import { Link, Text } from '@chakra-ui/react';

export interface CreditItemProps {
  text: string;
  url: string;
  name: string;
}

export function CreditItem(props: CreditItemProps) {
  return (
    <Text>
      {props.text}{' '}
      <Link color="teal.600" href={props.url} isExternal>
        {props.name}
      </Link>
    </Text>
  );
}
