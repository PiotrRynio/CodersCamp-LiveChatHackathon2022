import React, { useState } from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Typography, QuestionWithAnswers } from '../../components';
import questions from '../../mocks/questions.json';
import { useQuizQuestion } from '../../apiHooks/useQuizQuestion/useQuizQuestion';

type quizStates = 'start' | 'play' | 'end';

export const Quiz = () => {
  const { data } = useQuizQuestion(0);
  console.log(data);

  const { setPageTitle } = usePageTitle();
  const [quizState, setQuizState] = useState<quizStates>('start');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [correctAnswerClicked, setCorrectAnswerClicked] = useState<boolean>(false);
  setPageTitle('Quiz Title');

  const answerClickHandler = (isCorrect: boolean): void => {
    if (isCorrect) {
      setCorrectAnswerClicked(true);
    }
  };

  const nextQuestionButtonHandler = (): void => {
    setCorrectAnswerClicked(false);
    setQuestionIndex((prevState) => prevState + 1);
    if (questionIndex > questions.questionsList.length) setQuestionIndex(0);
    setQuizState('end');
  };

  return (
    <section>
      {/*<Button />*/}
      {quizState === 'start' && (
        <>
          <Typography variant="title">Title</Typography>
          <button onClick={() => setQuizState('play')}>start pany</button>
        </>
      )}
      {quizState === 'play' && (
        <>
          <QuestionWithAnswers
            questionType={questions.questionsList[questionIndex].type as 'text' | 'image'}
            question={questions.questionsList[questionIndex].questionText}
            answers={questions.questionsList[questionIndex].answersOptions}
            onAnswerClick={answerClickHandler}
          />
          {correctAnswerClicked && (
            <button onClick={() => nextQuestionButtonHandler()}>Następne pytanie proszę</button>
          )}
        </>
      )}
      {quizState === 'end' && <button onClick={() => setQuizState('play')}>start ponownie pany</button>}
    </section>
  );
};
