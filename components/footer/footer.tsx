import React from 'react';

import { Boxer, BoxerProps } from '@hoomies/unagui.components.boxer';
import { CreditList, CreditListProps } from '@hoomies/unagui.components.credits';
import { Copyright, CopyrightProps } from '@hoomies/unagui.components.copyright';

export interface FooterProps extends BoxerProps {
  /**
   * @description Define a copyright according to the Copyright component
   */
  copyright?: CopyrightProps;
  /**
   * @description Define credits according to the Credits component
   */
  credits?: CreditListProps['credits'];
  /**
   * @description Add custom Elements to the footer
   */
  children?: React.ReactNode;
}

export function Footer({
  dividerPosition = 'top',
  dividerWidth = '50vw',
  justifyContent = 'center',
  copyright = { author: 'Unagui', beginYear: 2021 },
  credits = [
    { text: 'Powered By', name: 'Unagui', url: 'https://www.my.app' },
    { text: 'Developer', name: 'John Doe', url: 'https://www.john-doe.fr' },
  ],
  children = null,
  ...rest
}: FooterProps) {
  return (
    <Boxer dividerPosition={dividerPosition} dividerWidth={dividerWidth} justifyContent={justifyContent} {...rest}>
      {copyright && <Copyright {...copyright} />}
      {credits && <CreditList credits={credits} />}
      {children}
    </Boxer>
  );
}
