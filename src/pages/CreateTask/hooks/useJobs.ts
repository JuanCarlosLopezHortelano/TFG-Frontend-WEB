// src/hooks/useJobs.ts
import { useState, useEffect } from 'react';
import type { Job } from '../../../types/types';
import { useRepositories } from '../../../infrastructure/RepositoryProvider';

export function useJobs() {
  const [jobs, setJobs]     = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  const { jobRepository } = useRepositories();

  useEffect(() => {
    jobRepository.fetchJobs()
      .then(setJobs)
      .catch(e => setError(e.message || 'Error'))
      .finally(() => setLoading(false));
  }, [jobRepository]);

  return { jobs, loading, error };
}
