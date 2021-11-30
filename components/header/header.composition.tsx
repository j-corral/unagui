import React from 'react';
import { Header, HeaderProps } from './header';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const THeader = (args: HeaderProps) => (
  <Wrapper resetCSS>
    <Header {...args} />
  </Wrapper>
);

export const PrimaryHeader = () => (
  <THeader
    logo={<p>Logo</p>}
    brand={<h1>Brand</h1>}
    menu={
      <span>
        <a href="#">Home </a>
        <a href="#">About </a>
        <a href="#">Contact</a>
      </span>
    }
    localeSwitcher={<p>EN</p>}
    themeSwitcher={<p>Light</p>}
  />
);
