import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const MainContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  min-height: calc(100vh - 56px - 100px);
  width: 1200px;
`;

export const Footer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: rgb(246, 246, 247);
`;
