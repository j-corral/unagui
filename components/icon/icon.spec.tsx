import React from 'react';
import { render, screen } from '@testing-library/react';
import { Primary } from './icon.composition';

it('should render svg icon with a Path Shape', () => {
  const { container } = render(<Primary />);
  const item = container.querySelector('svg');
  expect(item).toHaveClass('chakra-icon');
  const path = item.querySelector('path');
  expect(path).toBeInTheDocument();
  expect(path).toHaveAttribute(
    'd',
    'M12,1A11,11,0,1,1,1,12,11,11,0,0,1,12,1m0-1A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm4.41,11.5H12.5V7.59a.5.5,0,0,0-1,0V11.5H7.59a.5.5,0,0,0,0,1H11.5v3.91a.5.5,0,0,0,1,0V12.5h3.91a.5.5,0,0,0,0-1Z',
  );
});
