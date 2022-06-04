import { useState } from 'react';
import { StyledInput, StyledLabel, StyleWrapper } from './PlayerNameInput.styled';

type PlayerNameInputProps = {
  onChange: (playerName: string) => void;
  value: string;
};

export const PlayerNameInput = ({ onChange, value }: PlayerNameInputProps) => {
  return (
    <StyleWrapper>
      <StyledLabel htmlFor="player-name">Wpisz swoje imię</StyledLabel>
      <StyledInput
        name="player-name"
        id="player-name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        required
        min="2"
        max="20"
      />
    </StyleWrapper>
  );
};
