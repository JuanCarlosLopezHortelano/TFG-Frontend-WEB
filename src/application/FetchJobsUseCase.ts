import { Job } from '../domain/entities/Job';
import { JobRepository } from '../domain/repositories/JobRepository';

export class FetchJobsUseCase {
  constructor(private readonly repository: JobRepository) {}

  execute(): Promise<Job[]> {
    return this.repository.fetchAll();
  }
}
