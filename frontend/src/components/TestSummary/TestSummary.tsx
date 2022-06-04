import { MessageWrapper, ResultValue, TestSummaryContainer, Title } from './TestSummary.styled';
import { ShareIcons } from 'components/ShareIcons/ShareIcons';

export const TestSummary = () => {
  return (
    <TestSummaryContainer>
      <Title>Gratulacje!</Title>
      <MessageWrapper>
        Udało Ci się zdobyć <ResultValue>ileś tam </ResultValue> procent punktów. Podziel się wynikiem ze
        znajomymi i pomóż razem z nami zwiększać świadomość użytkowników internetu!
      </MessageWrapper>
      <ShareIcons />
    </TestSummaryContainer>
  );
};
