import { TextAnswer } from '../Answer';
import { Typography } from '../Typography';
import { QuestionWrapper, Wrapper } from './QuestionWithAnswers.styled';
import { useQuizQuestion } from '../../apiHooks/useQuizQuestion/useQuizQuestion';

type QuestionWithAnswersProps = {
  questionIndex: number;
  onAnswerClick(isCorrect: boolean): void;
  onLastQuestionAnswered(): void;
};

export const QuestionWithAnswers = ({
  onLastQuestionAnswered,
  questionIndex,
  onAnswerClick,
}: QuestionWithAnswersProps) => {
  const { data: questionData } = useQuizQuestion(questionIndex);
  console.log(questionIndex);
  console.log(questionData);
  if (!questionData) {
    return <></>;
  }

  const { questionText, answersOptions, type } = questionData;
  return (
    <Wrapper>
      <QuestionWrapper>
        <Typography variant={'question'}>{questionText}</Typography>
      </QuestionWrapper>
      {type === 'text' && (
        <div>
          {answersOptions.map((answer) => (
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
