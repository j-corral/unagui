import React from 'react';

import { Boxer, BoxerProps } from '@hoomies/unagui.components.boxer';
import { CreditList, CreditListProps } from '@hoomies/unagui.components.credits';
import { Copyright, CopyrightProps } from '@hoomies/unagui.components.copyright';

export interface FooterProps extends BoxerProps {
  copyright?: CopyrightProps;
  credits?: CreditListProps['credits'];
}

export function Footer(props: FooterProps) {
  const {
    dividerPosition = 'top',
    dividerWidth = '50vw',
    justifyContent = 'center',
    copyright = { author: 'Unagui', beginYear: 2021 },
    credits = [
      { text: 'Powered By', name: 'Unagui', url: 'https://www.my.app' },
      { text: 'Developer', name: 'John Doe', url: 'https://www.john-doe.fr' },
    ],
    ...rest
  } = props;
  return (
    <Boxer dividerPosition={dividerPosition} dividerWidth={dividerWidth} justifyContent={justifyContent} {...rest}>
      {copyright && <Copyright {...copyright} />}
      {credits && <CreditList credits={credits} />}
    </Boxer>
  );
}
