import { render } from 'test-utils';
import { screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('should display a title', () => {
    render(<Typography >Title test</Typography>);
    expect(screen.getByText(/Title test/i)).toBeInTheDocument();
  });

  it('should display a paragraph', () => {
    render(<Typography>Paragraph test</Typography>);
    expect(screen.getByText(/Paragraph test/i)).toBeInTheDocument();
  });

  it('should display a text', () => {
    render(<Typography>Text test</Typography>);
    expect(screen.getByText(/Text test/i)).toBeInTheDocument();
  });
});
