import { TextAnswer } from '../Answer';
import { Typography } from '../Typography';
import { QuestionWrapper, Wrapper } from './QuestionWithAnswers.styled';

type TextAnswerProps = {
  id: string;
  answerText: string;
  explanation: string;
  isCorrect: boolean;
};

type QuestionWithAnswersProps = {
  question: string;
  answers: TextAnswerProps[];
  questionType: 'text' | 'image';
  onAnswerClick(isCorrect: boolean): void;
};

export const QuestionWithAnswers = ({
  question,
  answers,
  questionType,
  onAnswerClick,
}: QuestionWithAnswersProps) => {
  return (
    <Wrapper>
      <QuestionWrapper>
        <Typography variant={'question'}>{question}</Typography>
      </QuestionWrapper>
      {questionType === 'text' && (
        <div>
          {answers.map((answer) => (
            <TextAnswer
              id={answer.id}
              key={answer.id}
              answerText={answer.answerText}
              explanation={answer.explanation}
              isCorrect={answer.isCorrect}
              onAnswerClick={onAnswerClick}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};
