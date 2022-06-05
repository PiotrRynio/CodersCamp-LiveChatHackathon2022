import {
  Body1,
  Body2,
  Title,
  Subtitle,
  Button,
  Answer,
  AnswerDescription,
  StartQuizDescription,
  Question,
} from './Typography.styled';

export interface TypographyProps {
  children: React.ReactNode;
  variant:
    | 'title'
    | 'subtitle'
    | 'body1'
    | 'body2'
    | 'button'
    | 'answer'
    | 'answerDescription'
    | 'question'
    | 'startQuizDescription';
}

export const Typography = ({ children, variant = 'body1' }: TypographyProps) => {
  if (variant === 'title') {
    return <Title>{children}</Title>;
  }
  if (variant === 'subtitle') {
    return <Subtitle>{children}</Subtitle>;
  }
  if (variant === 'button') {
    return <Button>{children}</Button>;
  }
  if (variant === 'body1') {
    return <Body1>{children}</Body1>;
  }
  if (variant === 'body2') {
    return <Body2>{children}</Body2>;
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
  if (variant === 'startQuizDescription') {
    return <StartQuizDescription>{children}</StartQuizDescription>;
  }

  return <p>{children}</p>;
};
