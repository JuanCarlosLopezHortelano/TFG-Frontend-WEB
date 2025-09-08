import { Job } from '../domain/entities/Job';
import { JobRepository } from '../domain/repositories/JobRepository';

export class HttpJobRepository implements JobRepository {
  constructor(private readonly baseUrl: string) {}

  async create(job: Job): Promise<Job> {
    const response = await fetch(`${this.baseUrl}/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });

    if (!response.ok) {
      throw new Error('Failed to create job');
    }

    return response.json();
  }

  async fetchAll(): Promise<Job[]> {
    const response = await fetch(`${this.baseUrl}/jobs`);

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    return response.json();
  }
}
