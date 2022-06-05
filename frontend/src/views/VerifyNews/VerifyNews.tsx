import React, { useState } from 'react';
import { ListWrapper, Wrapper, SourceWrapper } from './VerifyNews.styled';
import { Typography } from '../../components';
import {
  ClickedButton,
  VerifyInformationQuestion,
  VerifyInformationQuestionId,
} from '../../components/VerifyInformationIOuestion';
import { verifyNewsQuestionsListMock } from '../../mocks/verifyNewsQuestionsListMock';
import { FakeRiskInformation } from '../../components/FakeRiskInformation';
import { usePageTitle } from '../../providers/PageTitleProvider';

export type Answers = Record<VerifyInformationQuestionId, ClickedButton>;

export const VerifyNews = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Verify News');

  const listLength = verifyNewsQuestionsListMock.length;
  const [answers, setAnswers] = useState<Answers>({});

  const onAnswerButtonClick = ({ id, clickedButton }: { id: string; clickedButton: ClickedButton }) => {
    const newAnswer = { ...answers };
    newAnswer[id] = clickedButton;
    setAnswers(newAnswer);
  };

  return (
    <Wrapper>
      <Typography variant="title">Zweryfikuj artykuł</Typography>
      <div>
        <Typography variant="body1">
          Nie jest łatwo oddzielić prawdziwią informację od fakenewsa Wypełnij poniższe podpunkty, aby
          określić szansę na prawdziwość informacji
        </Typography>
      </div>
      <ListWrapper>
        {verifyNewsQuestionsListMock.map(({ question, id }) => (
          <VerifyInformationQuestion key={id} text={question} id={id} onButtonClick={onAnswerButtonClick} />
        ))}
      </ListWrapper>
      <FakeRiskInformation listLength={listLength} answers={answers} />
      <SourceWrapper>
        <Typography variant="subtitle2">
          Wykonano na podstawie: https://panoptykon.org/stop-dezinformacji-przewodnik
        </Typography>
      </SourceWrapper>
    </Wrapper>
  );
};
