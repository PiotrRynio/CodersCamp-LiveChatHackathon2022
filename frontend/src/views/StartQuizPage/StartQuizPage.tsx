import { useStartQuizPage } from './useStartQuizPage';
import { Typography } from '../../components/Typography';
import { PlayerNameInput } from '../../components/Input';
import { WarningModal } from '../../components/WarningModal';
import {
  StyledStartQuizPage,
  StyledTypographyWrapper,
  StyledInputWrapper,
  StyledLink,
  StyledForm,
  StyledSubtitleTypographyWrapper,
} from './StartQuizPage.styles';

export const StartQuizPage = () => {
  // const { playerName, setPlayerName } = useAppContext();
  // const [name] = useState('');
  // const [showWarning, setShowWarning] = useState(false);

  // const handleWarning = (value: boolean) => {
  //   setShowWarning(value);
  // }

  // const onClick = () => {
  //   console.log(playerName.length < 2);
  //   if (playerName.length < 3) {
  //     return handleWarning(!showWarning);
  //   };
  //   setPlayerName(name);
  // };

  const { playerName, setPlayerName, showWarning, handleWarning, handleStartGame } = useStartQuizPage();

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
        <StyledLink onClick={handleStartGame} to={`/${playerName.length >= 3 ? 'quiz' : 'start-quiz'}`}>
          <Typography variant="button">Zacznij Quiz</Typography>
        </StyledLink>
      </StyledForm>
      <WarningModal showWarning={showWarning} handleWarning={handleWarning}>
        Musisz wpisać co najmniej 3 znaki
      </WarningModal>
    </StyledStartQuizPage>
  );
};
