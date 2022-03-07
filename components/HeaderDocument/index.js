import Image from 'next/image';
import logo from '../../assets/sketch-logo.svg';
import { StyledHeader } from '../../styles/StyledContainerView.styled';
import { StyledLogo, StyledTitle } from './StyledHeaderDocument.styled';

const HeaderDocument = ({ name }) => (
  <StyledHeader>
    <StyledLogo>
      <Image src={logo} alt="logo" width={24} height={24} />
    </StyledLogo>
    <StyledTitle>{name}</StyledTitle>
  </StyledHeader>
);

export default HeaderDocument;
