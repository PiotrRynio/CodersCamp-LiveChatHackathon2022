import React, { useState } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Typography, QuestionWithAnswers, Button } from '../../components';
import { ButtonWrapper } from './Quiz.styled';

type quizStates = 'start' | 'play' | 'end';

export const Quiz = () => {
  const [quizState, setQuizState] = useState<quizStates>('start');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [correctAnswerClicked, setCorrectAnswerClicked] = useState<boolean>(false);

  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');

  const answerClickHandler = (isCorrect: boolean): void => {
    if (isCorrect) {
      setCorrectAnswerClicked(true);
    }
  };

  const nextQuestionButtonHandler = (): void => {
    setCorrectAnswerClicked(false);
    setQuestionIndex((prevState) => prevState + 1);
  };

  const handleLastQuestionAnswered = () => {
    setQuestionIndex(0);
    setQuizState('end');
  };

  return (
    <section>
      {quizState === 'start' && (
        <>
          <Typography variant="title">Title</Typography>
          <button onClick={() => setQuizState('play')}>start pany</button>
        </>
      )}
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
      {quizState === 'end' && <button onClick={() => setQuizState('play')}>start ponownie pany</button>}
    </section>
  );
};
