export interface Task {
  job_id: string;
  title: string;
  location: string;
  rate: number;
  duration: string;
  date?: string;        // ISO 8601 or undefined
  isFlexible?: boolean; // future use
}
