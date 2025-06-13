import { useEffect, useState } from 'react';

export interface Job {
  job_id: string;
  title: string;
  location: string;
  rate: number;
  duration: string;
  date?: string;        // ISO 8601 ó undefined = tarea libre
  isFlexible?: boolean; // para futuro
}

const STORAGE_KEY = 'taskio.jobs';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Job[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  return { jobs, setJobs };
}
