import { Body1, Heading3, Heading4, Button, Answer, AnswerDescription, Question } from './Typography.styled';

export interface TypographyProps {
  children: React.ReactNode;
  variant: 'title' | 'subtitle' | 'body' | 'button' | 'answer' | 'answerDescription' | 'question';
}

export const Typography = ({ children, variant = 'body-medium' }: TypographyProps) => {
  if (variant === 'title') {
    return <Title>{children}</Title>;
  }
  if (variant === 'subtitle') {
    return <Subtitle>{children}</Subtitle>;
  }
  if (variant === 'button') {
    return <Button>{children}</Button>;
  }
  if (variant === 'body-medium') {
    return <BodyMedium>{children}</BodyMedium>;
  }
  if (variant === 'body-small') {
    return <BodySmall>{children}</BodySmall>;
  }
  if (variant === 'answer') {
    return <Answer>{children}</Answer>;
  }
  if (variant === 'answerDescription') {
    return <AnswerDescription>{children}</AnswerDescription>;
  }
  if (variant === 'question') {
    return <Question>{children}</Question>;
  }
  return <p>{children}</p>;
};
