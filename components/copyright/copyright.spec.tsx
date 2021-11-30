import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryCopyright } from './copyright.composition';

it('Copyright should render with the correct text', () => {
  const { getByText } = render(<PrimaryCopyright />);
  const rendered = screen.getByText(/©/i);
  expect(rendered).toBeTruthy();
});
