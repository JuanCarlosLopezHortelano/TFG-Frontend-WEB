// src/components/TaskCalendar.tsx
import './TaskCalendar.css';
import type { Job } from '../hooks/useJob';
import TaskCard from './TaskCard';

export default function TaskCalendar({ jobs, setJobs }: { jobs: Job[]; setJobs(j: Job[]):void }) {
  const today=new Date(); const y=today.getFullYear(); const m=today.getMonth();
  const days= new Date(y,m+1,0).getDate();
  const jobsByDay:Record<number,Job[]>={};
  jobs.forEach(j=>{ if(j.date){const d=new Date(j.date).getDate(); (jobsByDay[d]=jobsByDay[d]||[]).push(j);} });

  return(
    <div className="calendar">
      <div className="calendar-header">
        {today.toLocaleString('default',{month:'long'})} {y}
      </div>

      <div className="grid">
        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><div key={d} className="day-name">{d}</div>)}
        {Array.from({length:days},(_,i)=>i+1).map(day=>(
          <div key={day}
               className="cell"
               onDragOver={e=>e.preventDefault()}
               onDrop={e=>{
                 const id=e.dataTransfer.getData('text/plain');
                 const moved=jobs.find(j=>j.job_id===id && !j.date); if(!moved)return;
                 const iso=new Date(y,m,day,9).toISOString();
                 setJobs(jobs.map(j=>j.job_id===id?{...j,date:iso}:j));
               }}>
            <span className="day-num">{day}</span>
            {jobsByDay[day]?.map(j=><TaskCard key={j.job_id} job={j} draggable={false}/>)}
          </div>
        ))}
      </div>
    </div>
  );
}
