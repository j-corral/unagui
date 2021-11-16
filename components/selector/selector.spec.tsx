import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Primary } from './selector.composition';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

it('should render with options', () => {
  const { getByText } = render(<Primary />, { wrapper: Wrapper });
  const rendered = getByText('Option A');

  expect(rendered).toBeTruthy();
});

it('should keep selected value on change', () => {
  const rendered = render(<Primary />, { wrapper: Wrapper });
  userEvent.selectOptions(screen.getByRole('combobox'), 'B');

  expect((screen.getByRole('option', { name: 'Option A' }) as HTMLOptionElement).selected).toBeFalsy();
  expect((screen.getByRole('option', { name: 'Option B' }) as HTMLOptionElement).selected).toBeTruthy();
  expect((screen.getByRole('option', { name: 'Option C' }) as HTMLOptionElement).selected).toBeFalsy();
});
