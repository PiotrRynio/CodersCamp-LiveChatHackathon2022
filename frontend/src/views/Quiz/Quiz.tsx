import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Typography, QuestionWithAnswers } from '../../components';
import questions from '../../mocks/questions.json';
import { useQuizQuestion } from '../../apiHooks/useQuizQuestion/useQuizQuestion';

export const Quiz = () => {
  const { data } = useQuizQuestion(0);
  console.log(data);

  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');
  return (
    <section>
      <Typography variant="title">Title</Typography>
      <QuestionWithAnswers
        questionType={questions.questionsList[0].type as 'text' | 'image'}
        question={questions.questionsList[0].questionText}
        answers={questions.questionsList[0].answersOptions}
      />
    </section>
  );
};
