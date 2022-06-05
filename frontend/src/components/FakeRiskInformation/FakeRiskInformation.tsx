import React from 'react';
import { Typography } from '../Typography';
import { Answers } from '../../views/VerifyNews';

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
        <b>Aby poznać poziom ryzyka odpowiedz najpierw na WSZYSTKIE pytania.</b>
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
    <>
      <Typography variant="body1">
        <b>Naszym zdaniem istnieje {riskOfFake().toUpperCase()} ryzyko, że artykuł to fake.</b>
      </Typography>
      <Typography variant="subtitle2">
        {' '}
        Pamiętaj jednak, że nie jesteśmy nieomylni i możemy się mylić. Zawsze staraj się weryfikować
        informację w kilku źródłach!
      </Typography>
    </>
  );
};
