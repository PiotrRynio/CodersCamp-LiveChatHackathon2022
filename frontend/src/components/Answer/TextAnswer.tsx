import { Typography } from '../Typography';
import { useState } from 'react';
import { AnswerText, Wrapper, CorrectIcon, WrongIcon, IconWrapper } from './TextAnswer.styled';

export type TextAnswerProps = {
  id: string;
  answerText: string;
  explanation: string;
  isCorrect: boolean;
  onAnswerClick(isCorrect: boolean): void;
};

export const TextAnswer = ({ answerText, explanation, isCorrect, onAnswerClick }: TextAnswerProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked(true);
    onAnswerClick(isCorrect);
  };

  return (
    <Wrapper onClick={() => clickHandler()}>
      <AnswerText>
        <Typography variant={'answer'}>{answerText}</Typography>

        {clicked && <IconWrapper>{isCorrect ? <CorrectIcon /> : <WrongIcon />}</IconWrapper>}
      </AnswerText>
      {clicked && <Typography variant={'answerDescription'}>{explanation}</Typography>}
    </Wrapper>
  );
};
