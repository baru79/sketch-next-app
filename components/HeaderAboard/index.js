import Image from 'next/image';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import breadcrumb from '../../assets/breadcrumb.svg';
import close from '../../assets/close.svg';
import { StyledArrowButton,
  StyledCloseButton,
  StyledHeaderTitle } from './StyledHeaderAboard.styled';
import { StyledHeader } from '../../styles/StyledContainerView.styled';

const HeaderAboard = ({ artboard }) => {
  const [documentId, setDocumentId] = useState();

  const { order, artboardCount, name, previousArtboard, nextArtboard } = artboard;

  useEffect(() => {
    setDocumentId(localStorage.getItem('documentId'));
  }, []);

  const handleClose = () => Router.push(`/document/${documentId}`);

  const handlePrev = () => {
    if (previousArtboard !== null) {
      const { shortId } = previousArtboard;
      Router.push(`/aboard/${shortId}`);
    }
  };

  const handleNext = () => {
    if (nextArtboard !== null) {
      const { shortId } = nextArtboard;
      Router.push(`/aboard/${shortId}`);
    }
  };

  return (
    <StyledHeader>
      <StyledCloseButton>
        <Image
          src={close}
          alt="close"
          width={16}
          height={16}
          onClick={handleClose}
        />
      </StyledCloseButton>
      <StyledArrowButton isEnable={previousArtboard !== null}>
        <Image
          src={arrowLeft}
          alt="arrowLeft"
          width={16}
          height={16}
          onClick={handlePrev}
        />
      </StyledArrowButton>
      {order + 1}
      <Image src={breadcrumb} alt="breadcrumb" width={16} height={16} />
      {artboardCount}
      <StyledArrowButton isEnable={nextArtboard !== null}>
        <Image
          src={arrowRight}
          alt="arrowRight"
          width={16}
          height={16}
          onClick={handleNext}
        />
      </StyledArrowButton>
      <StyledHeaderTitle>{name}</StyledHeaderTitle>
    </StyledHeader>
  );
};

export default HeaderAboard;
