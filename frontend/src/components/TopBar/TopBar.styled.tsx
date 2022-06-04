import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const PageTitle = styled.div`
  display: block;
  padding-left: 8px;
  border-left: 1px solid #e6e6e6;
  margin-left: 8px;
`;
