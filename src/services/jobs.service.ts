const BASE_URL = 'https://peowopdid1.execute-api.eu-west-1.amazonaws.com/dev';

export interface Job {
  id: string;
  title: string;
  description: string;
  // Add other fields as necessary
}

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await fetch(`${BASE_URL}/jobs`);
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
};
