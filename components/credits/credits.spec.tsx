import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryCreditList } from './credits.composition';

it('Credit List should render with the correct text', () => {
  const { getByText } = render(<PrimaryCreditList />);
  const rendered = screen.getByText(/Powered/i);
  expect(rendered).toBeTruthy();
});
