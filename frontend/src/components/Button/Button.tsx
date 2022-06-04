import { Typography } from 'components/Typography';
import { ReactNode, MouseEvent } from 'react';
import { PrimaryButton, SecondaryButton } from './Button.styled';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick(): void;
};

export const Button = ({ text, variant = 'primary', onClick }: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <PrimaryButton onClick={onClick}>
        <Typography variant="button">{text}</Typography>
      </PrimaryButton>
    );
  }

  return (
    <SecondaryButton onClick={onClick}>
      <Typography variant="button">{text}</Typography>
    </SecondaryButton>
  );
};
