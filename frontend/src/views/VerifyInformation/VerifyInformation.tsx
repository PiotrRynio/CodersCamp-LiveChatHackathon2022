import React, { useState } from 'react';
import { ListWrapper, Wrapper, SourceWrapper } from './VerifyInformation.styled';
import { Typography } from '../../components';
import {
  ClickedButton,
  VerifyInformationQuestion,
  VerifyInformationQuestionId,
} from '../../components/VerifyInformationIOuestion';
import { verifyInformationQuestionsListMock } from '../../mocks/verifyInformationQuestionsListMock';
import { FakeRiskInformation } from '../../components/FakeRiskInformation';
import { usePageTitle } from '../../providers/PageTitleProvider';

export type Answers = Record<VerifyInformationQuestionId, ClickedButton>;

export const VerifyInformation = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Verify Information');

  const listLength = verifyInformationQuestionsListMock.length;
  const [answers, setAnswers] = useState<Answers>({});

  const onAnswerButtonClick = ({ id, clickedButton }: { id: string; clickedButton: ClickedButton }) => {
    const newAnswer = { ...answers };
    newAnswer[id] = clickedButton;
    setAnswers(newAnswer);
  };

  return (
    <Wrapper>
      <Typography variant="title">Zweryfikuj artykuł</Typography>
      <Typography variant="body1">
        Wypełnij poniższe podpunkty, aby określić szansę na prawdziwość informacji:
      </Typography>
      <ListWrapper>
        {verifyInformationQuestionsListMock.map(({ question, id }) => (
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
