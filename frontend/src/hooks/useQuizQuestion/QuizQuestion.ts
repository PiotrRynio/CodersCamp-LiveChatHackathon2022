export type QuizQuestion =
  | {
      id: string;
      questionText: string;
      type: 'text';
      answersOptions: {
        id: string;
        answerText: string;
        isCorrect: boolean;
        explanation: string;
        source?: [string, string];
      }[];
    }
  | {
      id: string;
      questionText: string;
      type: 'image';
      answersOptions: {
        id: string;
        answerImage: string;
        isCorrect: boolean;
        explanation: string;
        source?: [string, string];
      }[];
    };
