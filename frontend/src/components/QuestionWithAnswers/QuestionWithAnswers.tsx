import { TextAnswer } from '../Answer';
import { Typography } from '../Typography';
import { QuestionWrapper, Wrapper } from './QuestionWithAnswers.styled';
import { useQuizQuestion } from '../../hooks/useQuizQuestion/useQuizQuestion';
import { ImageAnswers } from '../ImageAnswers';

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
  const { question, questionsNumber } = useQuizQuestion();
  const questionData = question(questionIndex);

  if (questionsNumber <= questionIndex) {
    onLastQuestionAnswered();
  }

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
      {type === 'image' && (
        <div>
          {answersOptions.map((answer) => (
            <ImageAnswers
              id={answer.id}
              key={answer.id}
              answerSource={answer.answerImage}
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
