// src/hooks/useJobs.ts
import { useState, useEffect } from 'react';
import type { Job } from '../../../types/types';
import { fetchJobs } from '../../../api/jobs';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs()
      .then(setJobs)
      .catch(e => setError(e instanceof Error ? e.message : 'Error'))
      .finally(() => setLoading(false));
  }, []);

  return { jobs, loading, error };
}
