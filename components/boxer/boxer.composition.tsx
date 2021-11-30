import React from 'react';
import { Boxer, BoxerProps } from './boxer';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const TBoxer = (args: BoxerProps) => (
  <Wrapper resetCSS>
    <Boxer {...args} />
  </Wrapper>
);

export const PrimaryBoxer = () => (
  <TBoxer>
    <p>Text</p>
  </TBoxer>
);
