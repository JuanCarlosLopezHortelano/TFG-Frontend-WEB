import { fetchJobs, Job } from '../services/jobs.service';

export const getJobs = async (): Promise<Job[]> => {
  return fetchJobs();
};
