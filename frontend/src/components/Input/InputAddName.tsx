import { StyledInput, StyledLabel } from './InputAddName.styled';

type InputProps = {
  name: string;
  onChange: () => void;
};

export const Input = ({ name, onChange }: InputProps) => {
  return (
    <>
      <StyledLabel htmlFor={name}>Wpisz swoje imię</StyledLabel>
      <StyledInput onChange={onChange} type="text" name={name} />
    </>
  );
};
