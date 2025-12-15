import { useEffect, useState } from 'react';

import { fetchTestById } from './TestDetailPage.data';

import type { TestModel } from './TestDetailPage.types';

export const useTestDetail = (id?: string) => {
  const [test, setTest] = useState<TestModel | null>(null);
  const [loading, setLoading] = useState<boolean>(!!id);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setTest(null);
      setLoading(false);
      setError('No test id provided');
      return;
    }
    setLoading(true);
    setError(null);
    fetchTestById(id)
      .then((t) => setTest(t))
      .catch((err) => setError(err?.message ?? 'Unknown error'))
      .finally(() => setLoading(false));
  }, [id]);

  return { test, loading, error } as const;
};
