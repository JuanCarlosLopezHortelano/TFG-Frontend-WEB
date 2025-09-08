import type { Job, TaskDraft } from '../../types/types';
import type { JobRepository } from '../../domain/jobRepository';

export class CreateJob {
  constructor(private readonly repository: JobRepository) {}

  execute(draft: TaskDraft, userId: string): Promise<Job> {
    return this.repository.createJob(draft, userId);
  }
}
