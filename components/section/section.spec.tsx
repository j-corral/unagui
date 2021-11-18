import React from 'react';
import { render, screen } from '@testing-library/react';
import { WithText } from './section.composition';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

beforeEach(() => render(<WithText />));

describe('Component/Section', () => {
  it('should display text', () => {
    expect(screen.queryByText(/Hello/i)).toBeInTheDocument();
  });
});
