import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: 12px 24px;
  min-width: 150px;
  height: 58px;
  color: #fff;
  background-color: #ff2b00;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
  text-transform: capitalize;
  &:hover {
    background-color: #e02600;
  }
`;

export const SecondaryButton = styled.button`
  padding: 12px 24px;
  min-width: 150px;
  height: 58px;
  color: #000;
  background-color: #fff;
  border-style: solid;
  border-color: #000;
  border-width: 1px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
  text-transform: capitalize;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
