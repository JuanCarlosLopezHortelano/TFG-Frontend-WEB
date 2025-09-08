// src/hooks/useCreateTask.ts
import { useState, useCallback } from 'react';
import type { TaskDraft, Job } from '../../../types/types';
import { useRepositories } from '../../../infrastructure/RepositoryProvider';

export function useCreateTask(userId: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);
  const [job, setJob]         = useState<Job | null>(null);

  const { jobRepository } = useRepositories();

  const execute = useCallback(
    async (draft: TaskDraft) => {
      setLoading(true);
      setError(null);
      try {
        const created = await jobRepository.createJob(draft, userId);
        setJob(created);
        return created;
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Error desconocido');
        }
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [jobRepository, userId]
  );

  return { execute, loading, error, job };
}
