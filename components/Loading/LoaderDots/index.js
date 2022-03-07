import { StyledDot, StyledLoaderDots } from './StyledLoaderDots.styled';

const LoaderDots = ({ color }) => (
  <StyledLoaderDots color={color}>
    <StyledDot time="0.25s" />
    <StyledDot time="0.50s" />
    <StyledDot time="0.75s" />
  </StyledLoaderDots>
);

export default LoaderDots;
