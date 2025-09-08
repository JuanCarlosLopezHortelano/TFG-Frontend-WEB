/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode } from 'react';
import { ApiJobRepository } from './job/ApiJobRepository';
import { LocalStorageTaskRepository } from './task/LocalStorageTaskRepository';
import type { JobRepository } from '../domain/JobRepository';
import type { TaskRepository } from '../domain/TaskRepository';

interface Repositories {
  jobRepository: JobRepository;
  taskRepository: TaskRepository;
}

const RepositoriesContext = createContext<Repositories | undefined>(undefined);

const jobRepository = new ApiJobRepository();
const taskRepository = new LocalStorageTaskRepository();

export function RepositoryProvider({ children }: { children: ReactNode }) {
  return (
    <RepositoriesContext.Provider value={{ jobRepository, taskRepository }}>
      {children}
    </RepositoriesContext.Provider>
  );
}

export function useRepositories(): Repositories {
  const ctx = useContext(RepositoriesContext);
  if (!ctx) throw new Error('useRepositories must be used within RepositoryProvider');
  return ctx;
}
