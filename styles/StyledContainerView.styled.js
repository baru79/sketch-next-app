import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  background-color: white;
  z-index: 1;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 76px;
  border-bottom: 1px solid lightgray;
`;

export const StyledContainerView = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  padding: 60px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
