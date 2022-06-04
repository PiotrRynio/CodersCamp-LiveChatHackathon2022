import { Typography } from 'components/Typography';
import { ReactNode, MouseEvent } from 'react';
import { PrimaryButton, SecondaryButton } from './Button.styled';

type ButtonProps = {
  text: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
};

export const Button = ({ text, variant, onClick }: ButtonProps) => {
  let button;

  if (variant === 'primary') {
    button = (
      <PrimaryButton onClick={onClick}>
        <Typography variant="button">{text}</Typography>
      </PrimaryButton>
    );
  } else if (variant === 'secondary') {
    button = (
      <SecondaryButton onClick={onClick}>
        <Typography variant="button">{text}</Typography>
      </SecondaryButton>
    );
  }
  return <>{button}</>;
};
