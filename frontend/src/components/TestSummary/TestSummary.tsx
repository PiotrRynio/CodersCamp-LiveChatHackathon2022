import {
  MessageWrapper,
  ResultValue,
  TestSummaryContainer,
  Title,
  ButtonWrapper,
} from './TestSummary.styled';
import { ShareIcons } from 'components/ShareIcons/ShareIcons';
import { Button } from '../Button';

export interface TestSummaryProps {
  result: string;
  onRestartGameButtonClick(): void;
}

export const TestSummary = ({ result, onRestartGameButtonClick }: TestSummaryProps) => {
  return (
    <TestSummaryContainer>
      <Title>Gratulacje!</Title>
      <MessageWrapper>
        Udało Ci się zdobyć <ResultValue>{result}</ResultValue> procent punktów. Podziel się wynikiem ze
        znajomymi i pomóż razem z nami zwiększać świadomość użytkowników internetu!
      </MessageWrapper>
      <ShareIcons result={result} />
      <ButtonWrapper>
        <Button text={'Poproszę jeszcze raz'} onClick={onRestartGameButtonClick} variant={'secondary'} />
      </ButtonWrapper>
    </TestSummaryContainer>
  );
};
