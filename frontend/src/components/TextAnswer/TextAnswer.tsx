import { Typography } from '../Typography';
import { useState } from 'react';
import { AnswerText, Wrapper, CorrectIcon, WrongIcon, IconWrapper, Link } from './TextAnswer.styled';

export type TextAnswerProps = {
  id: string;
  answerText: string;
  explanation: string;
  isCorrect: boolean;
  onAnswerClick(isCorrect: boolean): void;
  source?: [string, string];
};

export const TextAnswer = ({
  answerText,
  explanation,
  isCorrect,
  onAnswerClick,
  source,
}: TextAnswerProps) => {
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
      {clicked && (
        <Typography variant={'answerDescription'}>
          {explanation}
          {source && <Link href={source[1]}>{source[0]}</Link>}
        </Typography>
      )}
    </Wrapper>
  );
};
