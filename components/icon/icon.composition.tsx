import React from 'react';
import { Icon, IconProps } from './icon';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

const Template = (args: IconProps) => (
  <Wrapper resetCSS>
    <Icon {...args} />
  </Wrapper>
);

export const Primary = () => <Template name="add" />;
export const WithColor = () => <Template name="add" chakra={{ color: 'teal.500' }} />;
export const WithCustomSize = () => <Template name="add" chakra={{ boxSize: 400 }} />;
export const OnError = () => <Template name="adds" />;
