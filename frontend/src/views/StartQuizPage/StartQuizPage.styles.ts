import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledStartQuizPage = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTypographyWrapper = styled.div`
  padding: 20px 40px;
  border-radius: 5px;
  background-color: #ffcf01;
  margin: 0 auto;
  max-width: 900px;
`;

export const StyledInputWrapper = styled.div`
  align-self: center;
  // background-color: #4997FF;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
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
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  align-self: center;

  &:hover {
    background-color: #e02600;
  }
`;
