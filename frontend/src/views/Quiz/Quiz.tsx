import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Button, Typography, QuestionWithAnswers } from '../../components';
import questions from '../../mocks/questions.json';
//TODO: zainstalować usequery, w useQuerry zrobić custom hook'a, w nim zaimportować jsona i zwrócić obiekt z odpowienim typem
export const Quiz = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');

  return (
    <section>
      <Button />
      <Typography variant="title">Title</Typography>
      <QuestionWithAnswers
        questionType={questions.questionsList[0].type as 'text' | 'image'}
        question={questions.questionsList[0].questionText}
        answers={questions.questionsList[0].answersOptions}
      />
    </section>
  );
};
