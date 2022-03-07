import useQueryData from '../useQueryData';

const useGetDocument = (documentId) => {
  const { data, loading, error } = useQueryData(documentId);

  return {
    loading,
    error,
    document: loading || error ? {} : data.share.version.document,
  };
};

export default useGetDocument;
