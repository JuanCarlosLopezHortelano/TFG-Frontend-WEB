import type { Job } from '../hooks/useJob';
import styles from './TaskCard.css';

interface Props {
  job: Job;
  onDragStart?: (j: Job) => void;
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
