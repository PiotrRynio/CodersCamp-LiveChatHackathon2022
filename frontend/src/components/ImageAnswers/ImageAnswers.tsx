import { Typography } from '../Typography';
import { useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import { DescriptionWrapper, Wrapper, Image } from './ImageAnswers.styled';

type ImageAnswerProps = {
  id: string;
  answerSource: string;
  explanation: string;
  isCorrect: boolean;
  onAnswerClick(isCorrect: boolean): void;
};

export const ImageAnswers = ({ answerSource, explanation, isCorrect, onAnswerClick }: ImageAnswerProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked(true);
    onAnswerClick(isCorrect);
  };

  return (
    <Wrapper onClick={() => clickHandler()}>
      <Image src={answerSource} />
      <DescriptionWrapper>
        {clicked && <Typography variant={'answerDescription'}>{explanation}</Typography>}
        {clicked && (isCorrect ? <MdCheck /> : <MdClose />)}
      </DescriptionWrapper>
    </Wrapper>
  );
};
