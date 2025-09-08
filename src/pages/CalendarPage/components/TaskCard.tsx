import type { Task } from '../../../domain/Task';
import './TaskCard.css';

  interface Props {
    job: Task;
    onDragStart?: (j: Task) => void;
  draggable?: boolean;
}

export default function TaskCard({ job, onDragStart, draggable = true }: Props) {
  return (
    <div
      
      draggable={draggable}
      onDragStart={e => {
        if (!draggable) return;
        e.dataTransfer.setData('text/plain', job.job_id);
        onDragStart?.(job);
      }}
    >
      <strong>{job.title}</strong>
      <span >
        {job.location} · {job.rate} €/h
      </span>
    </div>
  );
}
