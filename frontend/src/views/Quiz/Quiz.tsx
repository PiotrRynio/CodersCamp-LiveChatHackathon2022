import React, { useState } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Typography, QuestionWithAnswers, Button } from '../../components';
import { ButtonWrapper } from './Quiz.styled';
import { TestSummary } from '../../components/TestSummary/TestSummary';

type quizStates = 'play' | 'end';

export const Quiz = () => {
  const [quizState, setQuizState] = useState<quizStates>('play');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [correctAnswerClicked, setCorrectAnswerClicked] = useState<boolean>(false);
  const [isFirstAnswerClick, setIsFirstAnswerClick] = useState<boolean>(true);
  const [result, setResult] = useState<number>(0);
  const [answersNumber, setAnswersNumber] = useState<number>(0);

  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');

  const answerClickHandler = (isCorrect: boolean): void => {
    if (isFirstAnswerClick) {
      setAnswersNumber((prevState) => prevState + 1);
      if (isCorrect) {
        setResult((prevState) => prevState + 1);
      }
    }
    setIsFirstAnswerClick(() => false);
    if (isCorrect) {
      setCorrectAnswerClicked(() => true);
    }
  };

  const nextQuestionButtonHandler = (): void => {
    setCorrectAnswerClicked(false);
    setIsFirstAnswerClick(() => true);
    setQuestionIndex((prevState) => prevState + 1);
  };

  const handleLastQuestionAnswered = () => {
    setQuestionIndex(0);
    setQuizState('end');
  };

  const handleRestartGameButtonClick = () => {
    setResult(0);
    setQuizState('play');
    setIsFirstAnswerClick(true);
    setAnswersNumber(0);
  };

  const resultString = (results: number, answers: number): string => {
    const resultPercent = Math.round((results * 100) / answers);
    return `${resultPercent}%`;
  };

  return (
    <section>
      {quizState === 'play' && (
        <>
          <QuestionWithAnswers
            onLastQuestionAnswered={handleLastQuestionAnswered}
            questionIndex={questionIndex}
            onAnswerClick={answerClickHandler}
          />
          {correctAnswerClicked && (
            <ButtonWrapper>
              <Button
                text={'Następne pytanie proszę'}
                onClick={() => nextQuestionButtonHandler()}
                variant={'secondary'}
              />
            </ButtonWrapper>
          )}
        </>
      )}
      {quizState === 'end' && (
        <TestSummary
          result={resultString(result, answersNumber)}
          onRestartGameButtonClick={handleRestartGameButtonClick}
        />
      )}
    </section>
  );
};
