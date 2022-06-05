import { Typography } from '../../components/Typography';
import { useAppContext } from 'providers/AppContextProvider';
import { PlayerNameInput } from '../../components/Input';
import {
  StyledStartQuizPage,
  StyledTypographyWrapper,
  StyledInputWrapper,
  StyledLink,
  StyledForm,
  StyledSubtitleTypographyWrapper,
} from './StartQuizPage.styles';
import { useState } from 'react';

export const StartQuizPage = () => {
  const { playerName, setPlayerName } = useAppContext();
  const [name] = useState('');
  const onClick = () => {
    if (playerName.length < 2) return;
    setPlayerName(name);
  };

  return (
    <StyledStartQuizPage>
      <StyledSubtitleTypographyWrapper>
        <Typography variant="subtitle">Rozpocznij test!</Typography>
      </StyledSubtitleTypographyWrapper>
      <StyledTypographyWrapper>
        <Typography variant="startQuizDescription">
          Przejdź test wiedzy o dezinformacji, trollingu oraz fake newsach. Sprawdź czy jesteś podatny na
          manipulację i rozwiń krytyczne myślenie odpowiadając na pytania. Podziel się otrzymanym wynikiem na
          social mediach.
        </Typography>
      </StyledTypographyWrapper>
      <StyledForm>
        <StyledInputWrapper>
          <PlayerNameInput onChange={setPlayerName} value={playerName} />
        </StyledInputWrapper>
        <StyledLink onClick={onClick} to="/quiz">
          <Typography variant="button">Zacznij Quiz</Typography>
        </StyledLink>
      </StyledForm>
    </StyledStartQuizPage>
  );
};
