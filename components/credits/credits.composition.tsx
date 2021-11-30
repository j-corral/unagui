import React from 'react';
import { CreditList, CreditListProps } from './list';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const TCreditList = (args: CreditListProps) => (
  <Wrapper resetCSS>
    <CreditList {...args} />
  </Wrapper>
);

const credits = [
  { text: 'Powered By', name: 'My App', url: 'https://www.my.app' },
  { text: 'Developer', name: 'John Doe', url: 'https://www.john-doe.com' },
];

export const PrimaryCreditList = () => <TCreditList credits={credits} />;
