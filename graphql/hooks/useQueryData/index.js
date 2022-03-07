import { useQuery } from '@apollo/client';
import GET_DATA from '../../queries/GET_DATA';

const useQueryData = (documentId) =>
  useQuery(GET_DATA, { variables: { id: documentId } });

export default useQueryData;
