import { Typography } from '../Typography';
import { useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import { AnswerText, Wrapper } from './Answer.styled';

type AnswerProps = {
  answer: string;
  answerDescription: string;
  isCorrect?: boolean;
};

export const Answer = ({ answer, answerDescription, isCorrect }: AnswerProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <Wrapper onClick={() => clickHandler()}>
      <AnswerText>
        <Typography variant={'answer'}>{answer}</Typography>
        {clicked && (isCorrect ? <MdCheck /> : <MdClose />)}
      </AnswerText>
      {clicked && <Typography variant={'answerDescription'}>{answerDescription}</Typography>}
    </Wrapper>
  );
};
