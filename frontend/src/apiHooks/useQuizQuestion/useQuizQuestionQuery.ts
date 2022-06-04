import { useQuery, UseQueryResult } from 'react-query';
import questionsListMock from 'mocks/questions.json';
import { QuizQuestionQuery } from './QuizQuestionQuery';

export const useQuizQuestionQuery = (questionNumber: number): UseQueryResult<QuizQuestionQuery> =>
  useQuery(`useQuizQuestion-${questionNumber}`, async () => {
    return questionsListMock.questionsList[questionNumber];
  });
