import { MessageWrapper, ResultValue, TestSummaryContainer, Title } from './TestSummary.styled';
import { ShareIcons } from 'components/ShareIcons/ShareIcons';

export interface TestSummaryProps {
  result: string;
}

export const TestSummary = ({ result }: TestSummaryProps) => {
  return (
    <TestSummaryContainer>
      <Title>Gratulacje!</Title>
      <MessageWrapper>
        Udało Ci się zdobyć <ResultValue>{result} </ResultValue> procent punktów. Podziel się wynikiem ze
        znajomymi i pomóż razem z nami zwiększać świadomość użytkowników internetu!
      </MessageWrapper>
      <ShareIcons result={'100%'} />
    </TestSummaryContainer>
  );
};
