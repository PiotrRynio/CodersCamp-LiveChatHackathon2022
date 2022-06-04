export type QuizQuestion = {
  id: string;
  questionText: string;
  type: string;
  answersOptions: [
    {
      id: string;
      answerText: string;
      isCorrect: boolean;
      explanation: string;
    },
  ];
};
