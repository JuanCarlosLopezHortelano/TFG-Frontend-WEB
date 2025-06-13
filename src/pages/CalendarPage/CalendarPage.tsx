import { useJobs } from './hooks/useJob';
import TaskCard from './components/TaskCard';
import TaskCalendar from './components/TaskCalendar';

export default function CalendarPage() {
  const { jobs, setJobs } = useJobs();

  const freeJobs = jobs.filter(j => !j.date);

  return (
    <div className= "wrapper">
      {/* Columna izquierda: tareas libres */}
      <aside className="sidebar">
        <h3>Eventos</h3>
        <div >
          {freeJobs.map(j => (
            <TaskCard key={j.job_id} job={j} />
          ))}
          {freeJobs.length === 0 && (
            <p>Sin tareas libres</p>
          )}
        </div>
      </aside>

      {/* Calendario */}
      <TaskCalendar jobs={jobs} setJobs={setJobs} />
    </div>
  );
}
