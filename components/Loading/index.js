import { StyledContainerView } from '../../styles/StyledContainerView.styled';
import LoaderDots from './LoaderDots';
import { StyledText } from './StyledLoading.styled';

const Loading = () => (
  <StyledContainerView>
    <StyledText color="orange" fontSize={26} bold>
      Loading
    </StyledText>
    <LoaderDots color="orange" />
  </StyledContainerView>
);

export default Loading;
