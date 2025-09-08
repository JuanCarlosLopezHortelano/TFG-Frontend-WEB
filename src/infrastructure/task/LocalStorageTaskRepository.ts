import type { Task } from '../../domain/Task';
import type { TaskRepository } from '../../domain/TaskRepository';

const STORAGE_KEY = 'taskio.jobs';

export class LocalStorageTaskRepository implements TaskRepository {
  async getTasks(): Promise<Task[]> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Task[]) : [];
    } catch {
      return [];
    }
  }

  async saveTasks(tasks: Task[]): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}
