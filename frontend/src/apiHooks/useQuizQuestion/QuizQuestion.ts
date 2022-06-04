export type QuizQuestion = {
  questionsList: [
    {
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
    },
  ];
};
