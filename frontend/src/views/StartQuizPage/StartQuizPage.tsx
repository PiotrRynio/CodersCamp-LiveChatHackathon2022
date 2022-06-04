import { Typography } from '../../components/Typography';
import { Input } from '../../components/Input';
import {
  StyledStartQuizPage,
  StyledTypographyWrapper,
  StyledInputWrapper,
  StyledLink,
} from './StartQuizPage.styles';

export const StartQuizPage = () => {
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
        <Input
          name="add-name"
          onChange={() => {
            console.log('change');
          }}
        />
      </StyledInputWrapper>
      <StyledLink to="/quiz">Zacznij Quiz</StyledLink>
    </StyledStartQuizPage>
  );
};
