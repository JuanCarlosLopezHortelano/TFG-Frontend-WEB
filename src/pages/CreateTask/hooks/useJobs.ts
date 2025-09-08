// src/hooks/useJobs.ts
import { useState, useEffect } from 'react';
import type { Job } from '../../../types/types';
import { FetchJobs } from '../../../application/jobs/fetchJobs';
import { JobApiRepository } from '../../../infrastructure/jobApiRepository';

const fetchJobsUseCase = new FetchJobs(new JobApiRepository());

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobsUseCase
      .execute()
      .then(setJobs)
      .catch(e => setError(e instanceof Error ? e.message : 'Error'))
      .finally(() => setLoading(false));
  }, []);

  return { jobs, loading, error };
}
