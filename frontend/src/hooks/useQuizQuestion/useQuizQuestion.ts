import { useQuery, UseQueryResult } from 'react-query';
import questionsListMock from 'mocks/questions.json';
import { QuizQuestion } from './QuizQuestion';

export const useQuizQuestion = () => {
  const questionsList: QuizQuestion[] = questionsListMock.questionsList;

  return {
    isLastQuestion: (questionNumber: number) => questionNumber === questionsList.length - 1,
    questionsNumber: questionsList.length,
    question: (questionNumber: number) => questionsList[questionNumber],
  };
};