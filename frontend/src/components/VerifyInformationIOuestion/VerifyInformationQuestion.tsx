import React, { useState } from 'react';
import { ButtonsWrapper, TextWrapper, Wrapper } from './VerifyInformationQuestion.styled';
import { Button, Typography } from 'components';

type VerifyInformationQuestionProps = {
  id: VerifyInformationQuestionId;
  text: string;
  onButtonClick: ({ id, clickedButton }: { id: string; clickedButton: ClickedButton }) => void;
};
export type VerifyInformationQuestionId = string;

export type ClickedButton = 'yes' | 'no';

export const VerifyInformationQuestion = ({ onButtonClick, id, text }: VerifyInformationQuestionProps) => {
  const [clickedButton, setClickedButton] = useState<ClickedButton | undefined>();

  const handleButtonClick = (clickedButton: ClickedButton) => {
    setClickedButton(clickedButton);
    onButtonClick({ id, clickedButton });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Typography variant="body">{text}</Typography>
      </TextWrapper>
      <ButtonsWrapper>
        <Button
          text="TAK"
          variant={clickedButton == 'yes' ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick('yes')}
        />
        <Button
          text="NIE"
          variant={clickedButton == 'no' ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick('no')}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};
