import { StyledInnerWrapper } from './WarningModal.style';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { useState } from 'react';

type WarningModalProps = {
  children: React.ReactNode;
  showWarning: boolean;
  handleWarning: (value: boolean) => void;
};

export const WarningModal = ({ children, showWarning, handleWarning }: WarningModalProps) => {
  return (
    <StyledInnerWrapper showWarning={showWarning}>
      <Typography variant="body1">{children}</Typography>
      <Button text="Rozumiem" onClick={() => handleWarning(!showWarning)} />
    </StyledInnerWrapper>
  );
};
