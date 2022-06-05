import { Typography } from '../../components/Typography';
import { useAppContext } from 'providers/AppContextProvider';
import { PlayerNameInput } from '../../components/Input';
import {
  StyledStartQuizPage,
  StyledTypographyWrapper,
  StyledInputWrapper,
  StyledLink,
} from './StartQuizPage.styles';
import { useState } from 'react';

export const StartQuizPage = () => {
  const { playerName, setPlayerName } = useAppContext();
  const [name, setName] = useState('');
  const onClick = () => {
    setPlayerName(name);
  };

  return (
    <StyledStartQuizPage>
      {/* <Typography variant="subtitle"></Typography> */}
      <StyledTypographyWrapper>
        <Typography variant="body1">
          Przejdź test wiedzy o dezinformacji, trollingu oraz fake newsach. Sprawdź czy jesteś podatny na
          manipulację i rozwiń krytyczne myślenie odpowiadając na pytania. Podziel się otrzymanym wynikiem na
          social mediach.
        </Typography>
      </StyledTypographyWrapper>
      <StyledInputWrapper>
        <PlayerNameInput onChange={setPlayerName} value={playerName} />
      </StyledInputWrapper>
      <StyledLink onClick={onClick} to="/quiz">
        Zacznij Quiz
      </StyledLink>
    </StyledStartQuizPage>
  );
};
