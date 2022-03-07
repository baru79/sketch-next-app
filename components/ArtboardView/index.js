import Image from 'next/image';
import { StyledAboardView } from './StyledAboardView.styled';

const ArtboardView = ({ artboard }) => {
  const { files } = artboard;
  return (
    <StyledAboardView>
      <Image
        src={files[0].url}
        alt={files[0].identifier}
        objectFit="contain"
        layout="fill"
        priority
      />
    </StyledAboardView>
  );
};

export default ArtboardView;
