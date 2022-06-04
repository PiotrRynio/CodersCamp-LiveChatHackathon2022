import { Typography } from '../Typography';
import { useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import { AnswerText, Wrapper } from './Answer.styled';

export type TextAnswerProps = {
  id: string;
  answerText: string;
  explanation: string;
  isCorrect?: boolean;
};

export const TextAnswer = ({ answerText, explanation, isCorrect }: TextAnswerProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <Wrapper onClick={() => clickHandler()}>
      <AnswerText>
        <Typography variant={'answer'}>{answerText}</Typography>
        {clicked && (isCorrect ? <MdCheck /> : <MdClose />)}
      </AnswerText>
      {clicked && <Typography variant={'answerDescription'}>{explanation}</Typography>}
    </Wrapper>
  );
};
