import styled, { css, keyframes } from 'styled-components';

export const StyledLoaderDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    width: 10px;
    height: 10px;
    display: block;
    background: ${(props) => `${props.color};`}
    border-radius: 50%;
    position: relative;
    margin: 0 5px;
  }
`;

const dotAnimation = keyframes`
 0% {top: 0; }
 50%  {top: 10px; }
 100% {top: 0; }
`;

const animation = (props) => css`
  ${dotAnimation} 1s infinite ${props.time} alternate;
`;

export const StyledDot = styled.span`
  animation: ${animation};
`;
