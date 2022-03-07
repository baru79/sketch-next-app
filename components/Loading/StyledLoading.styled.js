import styled from 'styled-components';

export const StyledText = styled.span`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: ${(props) => props.bold && 'bold'};
  margin-bottom: 10px;
`;
