import { StyledContainerView } from '../../styles/StyledContainerView.styled';
import { StyledError } from './StyledError.styled';

const Error = ({ message }) => (
  <StyledContainerView>
    <StyledError>
      <div>The following error has occurred:</div>
      <div>{message}</div>
    </StyledError>
  </StyledContainerView>
);

export default Error;
