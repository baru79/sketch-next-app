import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DocumentView from '../../../components/DocumentView';
import HeaderDocument from '../../../components/HeaderDocument';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import useGetDocument from '../../../graphql/hooks/useGetDocument';

const DocumentPage = () => {
  const router = useRouter();

  const { documentId } = router.query;

  const { document, loading, error } = useGetDocument(documentId);

  useEffect(() => {
    if (localStorage.getItem('documentId') !== documentId) {
      localStorage.setItem('documentId', documentId);
    }
  }, [documentId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const { name, artboards } = document || {};

  return (
    <>
      <HeaderDocument name={name} />
      <DocumentView artboards={artboards} />
    </>
  );
};

export default DocumentPage;
