import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryFooter } from './footer.composition';

it('Footer should render with the correct text', () => {
  const { getByText } = render(<PrimaryFooter />);
  const rendered = screen.getByText(/©/i);
  expect(rendered).toBeTruthy();
});
