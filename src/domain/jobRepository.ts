import type { Job, TaskDraft } from '../types/types';

export interface JobRepository {
  fetchJobs(): Promise<Job[]>;
  createJob(draft: TaskDraft, userId: string): Promise<Job>;
}
