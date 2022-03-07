import styled from 'styled-components';

export const StyledCloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  left: 24px;
  cursor: pointer;
`;

export const StyledHeaderTitle = styled.div`
  font-size: 16px;
  font-family: Helvetica;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

export const StyledArrowButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: ${(props) => (props.isEnable ? 'pointer' : 'not-allowed')};
`;
