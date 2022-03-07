import useQueryAboard from '../useQueryAboard';

const useGetAboard = (documentId, shortId) => {
  const { data, loading, error } = useQueryAboard(documentId, shortId);

  const artboard = loading || error ? {} : data.share.artboard;
  const artboardCount =
    loading || error ? {} : data.share.version.document.artboardCount;

  return {
    loading,
    error,
    artboard: {
      ...artboard,
      artboardCount,
    },
  };
};

export default useGetAboard;
