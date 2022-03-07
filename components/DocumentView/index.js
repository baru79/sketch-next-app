import { StyledContainerView } from '../../styles/StyledContainerView.styled';
import ArtboardList from '../ArtboardList';

const DocumentView = ({ artboards }) => (
  <StyledContainerView>
    <ArtboardList entries={artboards.entries} />
  </StyledContainerView>
);

export default DocumentView;
