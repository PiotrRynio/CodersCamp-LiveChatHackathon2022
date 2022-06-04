import { useQuery, UseQueryResult } from 'react-query';
import questionsListMock from 'mocks/questions.json';
import { QuizQuestion } from './QuizQuestion';

export const useQuizQuestion = (questionNumber: number): UseQueryResult<QuizQuestion> =>
  useQuery(`useQuizQuestion-${questionNumber}`, async () => {
    return questionsListMock.questionsList[questionNumber];
  });
