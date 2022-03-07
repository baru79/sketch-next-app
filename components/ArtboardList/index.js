import Router from 'next/router';
import Image from 'next/image';
import { StyledAboardItem,
  StyledAboardList,
  StyledAboardName } from './StyledAboardPage.styled';

const ArtboardList = ({ entries }) => (
  <StyledAboardList len={entries.length < 5 ? 2 : 5}>
    {entries.map((entry) => {
      const { files } = entry;
      const imgThumbnail = files[0].thumbnails.find(
        (thumbnail) => thumbnail.type === 'M',
      );
      return (
        <StyledAboardItem
          key={entry.identifier}
          onClick={() => Router.push(`/aboard/${entry.shortId}`)}
        >
          <Image
            src={imgThumbnail.url}
            alt={imgThumbnail.identifier}
            width={200}
            height={200}
            objectFit="contain"
          />
          <StyledAboardName>{entry.name}</StyledAboardName>
        </StyledAboardItem>
      );
    })}
  </StyledAboardList>
);

export default ArtboardList;
