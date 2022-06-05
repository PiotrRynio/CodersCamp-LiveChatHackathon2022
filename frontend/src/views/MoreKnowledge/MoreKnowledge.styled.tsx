import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
`;

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  margin: 32px 0;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.div`
  padding: 16px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  border-top: 2px solid #ff2b00;
`;

export const StyledLink = styled.a`
  background-color: #fff;
  display: inline-block;
  padding: 3px 7px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 14px;
  border: 1px solid #666;
  transition: all 0.3s ease;

  &,
  &:active {
    color: #666;
    text-decoration: none;
  }

  &:hover {
    background-color: #ffd000;
    border: 1px solid #000;
    color: #000;
  }
`;
