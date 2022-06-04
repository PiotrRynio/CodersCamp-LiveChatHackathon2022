import { Typography } from '../../components/Typography';
import { StyledStartQuizPage, StyledLink } from './StartQuizPage.styles';

type StartQuizPageProps = {
  [key: string]: string;
};

export const StartQuizPage = ({ startQuizTitle, startQuizText }: StartQuizPageProps) => {
  return (
    <StyledStartQuizPage>
      <Typography variant="subtitle">{startQuizTitle}</Typography>
      <Typography variant="body1">{startQuizText}</Typography>
      <StyledLink to="/quiz">Start Quiz</StyledLink>
    </StyledStartQuizPage>
  );
};
