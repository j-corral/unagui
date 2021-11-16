import React from 'react';
import { render } from '@testing-library/react';
import { BasicWrapper, WrapperWithText } from './wrapper.composition';
import { Wrapper } from './wrapper';

it('Basic Wrapper should render', () => {
  const rendered = render(<BasicWrapper />, { wrapper: Wrapper });
  expect(rendered).toBeTruthy();
});

it('WrapperWithText should render with the correct text', () => {
  const { getByText } = render(<WrapperWithText />, { wrapper: Wrapper });
  const rendered = getByText('Hello');
  expect(rendered).toBeTruthy();
});
