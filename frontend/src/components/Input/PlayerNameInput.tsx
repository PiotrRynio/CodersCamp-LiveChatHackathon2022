import { StyledInput, StyledWrapper } from './PlayerNameInput.styled';

type PlayerNameInputProps = {
  onChange: (playerName: string) => void;
  value: string;
};

export const PlayerNameInput = ({ onChange, value }: PlayerNameInputProps) => {
  return (
    <StyledWrapper>
      <StyledInput
        placeholder="Podaj swoje imię"
        name="player-name"
        id="player-name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        required
        min="2"
        max="20"
      />
    </StyledWrapper>
  );
};
