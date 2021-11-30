import React from 'react';
import { Copyright, CopyrightProps } from './copyright';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const TCopyright = (args: CopyrightProps) => (
  <Wrapper resetCSS>
    <Copyright {...args} />
  </Wrapper>
);

export const PrimaryCopyright = () => <TCopyright author="Hoomies" beginYear={2021} />;
