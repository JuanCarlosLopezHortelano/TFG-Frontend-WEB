import { useEffect, useState } from 'react';
import type { Task } from '../../../domain/Task';
import { useRepositories } from '../../../infrastructure/RepositoryProvider';

export function useJobs() {
  const { taskRepository } = useRepositories();
  const [jobs, setJobs] = useState<Task[]>([]);

  useEffect(() => {
    taskRepository.getTasks().then(setJobs);
  }, [taskRepository]);

  useEffect(() => {
    taskRepository.saveTasks(jobs);
  }, [jobs, taskRepository]);

  return { jobs, setJobs };
}
