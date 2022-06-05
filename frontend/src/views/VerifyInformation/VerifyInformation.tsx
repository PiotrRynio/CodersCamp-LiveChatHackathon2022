import React, { useState } from 'react';
import { ListWrapper, Wrapper } from './VerifyInformation.styled';
import { Typography } from '../../components';
import {
  ClickedButton,
  VerifyInformationQuestion,
  VerifyInformationQuestionId,
} from '../../components/VerifyInformationIOuestion';
import { verifyInformationQuestionsListMock } from '../../mocks/verifyInformationQuestionsListMock';

export const VerifyInformation = () => {
  const listLength = verifyInformationQuestionsListMock.length;
  const [answers, setAnswers] = useState<Record<VerifyInformationQuestionId, ClickedButton>>({});

  const onAnswerButtonClick = ({ id, clickedButton }: { id: string; clickedButton: ClickedButton }) => {
    const newAnswer = { ...answers };
    newAnswer[id] = clickedButton;
    setAnswers(newAnswer);
  };

  return (
    <Wrapper>
      <Typography variant="title">Zweryfikuj artykuł</Typography>
      <Typography variant="body">
        Wypełnij poniższe podpunkty, aby określić szansę na prawdziwość informacji:
      </Typography>
      <ListWrapper>
        {verifyInformationQuestionsListMock.map(({ question, id }) => (
          <VerifyInformationQuestion key={id} text={question} id={id} onButtonClick={onAnswerButtonClick} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
