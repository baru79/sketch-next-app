import { useQuery } from '@apollo/client';
import GET_ABOARD from '../../queries/GET_ABOARD';

const useQueryAboard = (documentId, shortId) =>
  useQuery(GET_ABOARD, {
    variables: {
      id: documentId,
      shortId,
    },
  });

export default useQueryAboard;
