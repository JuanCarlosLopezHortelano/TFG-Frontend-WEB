import type { Job } from '../../types/types';
import type { JobRepository } from '../../domain/jobRepository';

export class FetchJobs {
  constructor(private readonly repository: JobRepository) {}

  execute(): Promise<Job[]> {
    return this.repository.fetchJobs();
  }
}
