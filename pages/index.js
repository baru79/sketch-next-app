import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Loading from '../components/Loading';

function App() {
  const router = useRouter();
  const { documentId } = process.env;

  useEffect(() => {
    localStorage.setItem('documentId', documentId);
    router.push(`/document/${documentId}`);
  }, [router, documentId]);

  return <Loading />;
}

export default App;
