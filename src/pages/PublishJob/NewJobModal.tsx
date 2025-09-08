// src/pages/PublishJob/NewJobModal.tsx
import { useState } from "react";
import { Modal } from "../../components/Modal";

export function NewJobModal({ open, onClose, onCreate }: {
  open: boolean;
  onClose: () => void;
  onCreate: (job: FormJob) => void;
}) {
  const [form, setForm] = useState<FormJob>({
    title: '',
    category: 'Eventos',
    location: '',
    rate: 12,
    duration: '4 h',
    description: '',
  });

  function handleChange<K extends keyof FormJob>(k: K, v: FormJob[K]) {
    setForm({ ...form, [k]: v });
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h3>Publicar nueva tarea</h3>

      {(["title","location","duration"] as Array<keyof FormJob>).map(f => (
        <input
          key={f}
          placeholder={f}
          style={st.input}
          value={form[f] as string}
          onChange={e => handleChange(f, e.target.value)}
        />
      ))}

      <select style={st.input} value={form.category}
              onChange={e=>handleChange("category",e.target.value)}>
        {["Eventos","Hostelería","Logística"].map(c=><option key={c}>{c}</option>)}
      </select>

      <input type="number" style={st.input} placeholder="Tarifa €/h"
             value={form.rate} onChange={e=>handleChange("rate",Number(e.target.value))}/>

      <textarea rows={4} placeholder="Descripción" style={st.input}
        value={form.description} onChange={e=>handleChange("description",e.target.value)}/>

      <button style={st.primaryBtn} onClick={()=>{onCreate(form); onClose();}}>
        Publicar
      </button>
    </Modal>
  );
}

type FormJob = {
  title: string;
  category: string;
  location: string;
  rate: number;
  duration: string;
  description: string;
};

const st = {
  input:{width:"100%",marginTop:"12px",padding:"10px",borderRadius:"12px",border:"1px solid #ccc"},
  primaryBtn:{marginTop:"16px",padding:"10px 24px",borderRadius:"20px",
              border:"none",background:"#0a66c2",color:"#fff",cursor:"pointer"}
};
