import React from 'react';
import { Typography } from '../Typography';
import { Answers } from '../../views/VerifyInformation';

type FakeRiskInformationProps = {
  answers: Answers;
  listLength: number;
};
export const FakeRiskInformation = ({ answers, listLength }: FakeRiskInformationProps) => {
  const numberOfAnswers = Object.keys(answers).length;
  const isAllAnswersSelected = numberOfAnswers === listLength;

  if (!isAllAnswersSelected) {
    return (
      <Typography variant="body1">
        <b>Odpowiedz na WSZYSTKIE pytania aby poznać ryzyko, że jest to fake.</b>
      </Typography>
    );
  }

  const yesAnswers = Object.values(answers).filter((answer) => answer === 'yes');

  const riskOfFake = (): string => {
    const percent = (yesAnswers.length / listLength) * 100;

    if (percent > 70) {
      return 'wysokie';
    }
    if (percent > 30) {
      return 'średnie';
    }
    return 'niskie';
  };

  return (
    <Typography variant="body1">
      <b>Istnieje {riskOfFake().toUpperCase()}, że artykuł jest fakiem.</b>
    </Typography>
  );
};
