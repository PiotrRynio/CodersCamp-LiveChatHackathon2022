import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
`;

export const ContentWrapper = styled.div`
  margin: 32px 0;
  width: 100%;
  display: flex;
`;
export const TextWrapper = styled.div`
  background-color: rgb(246, 246, 247);
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 15px;
  border-radius: 15px;
  width: 45%;
  height: 55%;
`;
export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
`;
export const Image = styled.img`
  width: 600px;
  display: block;
`;
export const TitleWrapper = styled.div`
  border: 1px black solid;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

export const ButtonSection = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
