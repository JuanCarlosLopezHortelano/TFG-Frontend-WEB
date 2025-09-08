import { Job } from '../domain/entities/Job';
import { JobRepository } from '../domain/repositories/JobRepository';

export class CreateJobUseCase {
  constructor(private readonly repository: JobRepository) {}

  execute(job: Job): Promise<Job> {
    return this.repository.create(job);
  }
}
