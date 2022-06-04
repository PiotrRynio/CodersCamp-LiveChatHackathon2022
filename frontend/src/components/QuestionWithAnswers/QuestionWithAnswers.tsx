import { TextAnswer, TextAnswerProps } from '../Answer';
import { Typography } from '../Typography';
import { QuestionWrapper, Wrapper } from './QuestionWithAnswers.styled';

type QuestionWithAnswersProps = {
  question: string;
  answers: TextAnswerProps[];
  questionType: 'text' | 'image';
};

export const QuestionWithAnswers = ({ question, answers, questionType }: QuestionWithAnswersProps) => {
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
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};
