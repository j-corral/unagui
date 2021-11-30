import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryHeader } from './header.composition';

it('Header should render with the correct text', () => {
  const { getByText } = render(<PrimaryHeader />);
  const rendered = screen.getByText(/Logo/i);
  expect(rendered).toBeTruthy();
});
