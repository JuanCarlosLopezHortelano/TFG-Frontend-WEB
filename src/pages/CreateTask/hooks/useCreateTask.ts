// src/hooks/useCreateTask.ts
import { useState, useCallback } from 'react';
import type { TaskDraft } from '../TaskDraftContext';
import type { Job } from '../../../types/types';
import { createJob } from '../../../api/jobs';

export function useCreateTask(userId: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [job, setJob] = useState<Job | null>(null);

  const execute = useCallback(
    async (draft: TaskDraft) => {
      setLoading(true);
      setError(null);
      try {
        const created = await createJob(draft, userId);
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
    [userId]
  );

  return { execute, loading, error, job };
}
