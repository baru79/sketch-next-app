import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArtboardView from '../../../components/ArtboardView';
import Error from '../../../components/Error';
import HeaderAboard from '../../../components/HeaderAboard';
import Loading from '../../../components/Loading';
import useGetAboard from '../../../graphql/hooks/useGetAboard';
import { StyledContainerView } from '../../../styles/StyledContainerView.styled';

const ArtboardPage = () => {
  const router = useRouter();

  const { shortId } = router.query;

  const [documentId, setDocumentId] = useState();
  const { artboard, loading, error } = useGetAboard(documentId, shortId);

  useEffect(() => {
    setDocumentId(localStorage.getItem('documentId'));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <HeaderAboard artboard={artboard} />
      <StyledContainerView>
        <ArtboardView artboard={artboard} />
      </StyledContainerView>
    </>
  );
};

export default ArtboardPage;
