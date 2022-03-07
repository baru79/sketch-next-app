import styled from 'styled-components';

export const StyledAboardList = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.len}, 1fr)`};
  column-gap: 48px;
  row-gap: 24px;
`;

export const StyledAboardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StyledAboardName = styled.div`
  font-size: 14px;
  padding-top: 15px;
`;
