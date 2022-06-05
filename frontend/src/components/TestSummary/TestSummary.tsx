import { ResultValue, TestSummaryContainer, ButtonWrapper, ShareWrapper } from './TestSummary.styled';
import { ShareIcons } from 'components/ShareIcons/ShareIcons';
import { Button } from '../Button';
import { Typography } from '../Typography';

export interface TestSummaryProps {
  result: string;
  onRestartGameButtonClick(): void;
}

export const TestSummary = ({ result, onRestartGameButtonClick }: TestSummaryProps) => {
  return (
    <TestSummaryContainer>
      <Typography variant="title">Gratulacje!</Typography>
      <Typography variant="body1">
        Udało Ci się zdobyć <ResultValue>{result}</ResultValue> procent punktów. Podziel się wynikiem ze
        znajomymi i pomóż razem z nami zwiększać świadomość użytkowników internetu!
      </Typography>
      <ShareWrapper>
        <Typography variant="subtitle">Share it! </Typography>
        <ShareIcons result={result} />
      </ShareWrapper>
      <ButtonWrapper>
        <Button text={'Poproszę jeszcze raz'} onClick={onRestartGameButtonClick} variant={'secondary'} />
      </ButtonWrapper>
    </TestSummaryContainer>
  );
};
