import React, { useState } from 'react';
import { ListWrapper, Wrapper, SourceWrapper } from './VerifyTwitt.styled';
import { Typography } from '../../components';
import {
  ClickedButton,
  VerifyInformationQuestion,
  VerifyInformationQuestionId,
} from '../../components/VerifyInformationIOuestion';
import { verifyTwittQuestionsListMock } from '../../mocks/verifyTwittQuestionsListMock';
import { FakeRiskInformation } from '../../components/FakeRiskInformation';
import { usePageTitle } from '../../providers/PageTitleProvider';

export type Answers = Record<VerifyInformationQuestionId, ClickedButton>;

export const VerifyTwitt = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Verify Twitt');

  const listLength = verifyTwittQuestionsListMock.length;
  const [answers, setAnswers] = useState<Answers>({});

  const onAnswerButtonClick = ({ id, clickedButton }: { id: string; clickedButton: ClickedButton }) => {
    const newAnswer = { ...answers };
    newAnswer[id] = clickedButton;
    setAnswers(newAnswer);
  };

  return (
    <Wrapper>
      <Typography variant="title">Zweryfikuj tweeta</Typography>
      <div>
        <Typography variant="body1">
          Nie jest łatwo oddzielić prawdziwią informację od fakenewsa Wypełnij poniższe podpunkty, aby
          określić szansę na prawdziwość informacji
        </Typography>
      </div>
      <ListWrapper>
        {verifyTwittQuestionsListMock.map(({ question, id }) => (
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
