import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryBoxer } from './boxer.composition';

it('Boxer should render with the correct text', () => {
  const { getByText } = render(<PrimaryBoxer />);
  const rendered = screen.getByText(/Text/i);
  expect(rendered).toBeTruthy();
});
