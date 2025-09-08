import { Job } from '../entities/Job';

export interface JobRepository {
  create(job: Job): Promise<Job>;
  fetchAll(): Promise<Job[]>;
}
