import React from 'react';
import { render, screen } from 'test-utils';
import { Button } from './Button';

test('renders button with text "Hello"', () => {
  render(<Button></Button>);
  const button = screen.getByRole('button', { name: /hello/i });
  expect(button).toBeInTheDocument();
});
