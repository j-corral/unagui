import React from 'react';
import { render, screen } from '@testing-library/react';
import { Primary, WithText } from './hero.composition';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

beforeEach(() => render(<Primary />));

describe('Component/Hero', () => {
  it('should display text', () => {
    expect(screen.queryByText(/Hello/i)).toBeInTheDocument();
  });
});
