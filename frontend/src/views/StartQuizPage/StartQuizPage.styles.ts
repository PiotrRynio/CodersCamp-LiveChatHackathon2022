import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledStartQuizPage = styled.section`
  flex-grow: 1;
  align-items: center;
  margin: 0 auto;
`;

export const StyledTypographyWrapper = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  border-bottom: 2px solid #ff2b00;
  border-top: 2px solid #ff2b00;
`;

export const StyledInputWrapper = styled.div`
  align-self: center;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  min-width: 150px;
  color: #fff;
  background-color: #ff2b00;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
  text-transform: capitalize;
  text-transform: uppercase;
  text-decoration: none;
  align-self: center;

  &:hover {
    background-color: #e02600;
  }
`;

export const StyledForm = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
  margin: 0 auto;
  max-width: 700px;
  border-radius: 5px;
`;

export const StyledSubtitleTypographyWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
