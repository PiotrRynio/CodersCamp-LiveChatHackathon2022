import { Typography } from '../Typography';
import { useState } from 'react';
import { DescriptionWrapper, Wrapper, Image, CorrectIcon, WrongIcon, Link } from './ImageAnswers.styled';

type ImageAnswerProps = {
  id: string;
  answerSource: string;
  explanation: string;
  isCorrect: boolean;
  onAnswerClick(isCorrect: boolean): void;
  source?: [string, string];
};

export const ImageAnswers = ({
  answerSource,
  explanation,
  isCorrect,
  onAnswerClick,
  source,
}: ImageAnswerProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked(true);
    onAnswerClick(isCorrect);
  };

  return (
    <Wrapper onClick={() => clickHandler()}>
      <Image src={answerSource} />
      <DescriptionWrapper>
        {clicked && (
          <Typography variant={'answerDescription'}>
            {explanation}
            {source && <Link href={source[1]}>{source[0]}</Link>}
          </Typography>
        )}
        {clicked && (isCorrect ? <CorrectIcon /> : <WrongIcon />)}
      </DescriptionWrapper>
    </Wrapper>
  );
};
