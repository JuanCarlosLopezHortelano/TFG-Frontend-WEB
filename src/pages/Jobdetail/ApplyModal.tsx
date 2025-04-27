// src/pages/JobDetail/ApplyModal.tsx
import { useState } from "react";
import { Modal } from "../../components/Modal";

export function ApplyModal({ open, onClose, onSubmit }: {
  open: boolean;
  onClose: () => void;
  onSubmit: (message: string) => void;
}) {
  const [msg, setMsg] = useState("");

  return (
    <Modal open={open} onClose={onClose}>
      <h3>Enviar postulación</h3>
      <textarea
        placeholder="Mensaje al empleador…"
        style={styles.textarea}
        rows={4}
        value={msg}
        onChange={e=>setMsg(e.target.value)}
      />
      <button style={styles.primaryBtn} onClick={()=>{onSubmit(msg); onClose();}}>
        Enviar
      </button>
    </Modal>
  );
}

const styles = {
  textarea:{width:"100%",padding:"12px",borderRadius:"12px",border:"1px solid #ccc"},
  primaryBtn:{marginTop:"16px",padding:"10px 24px",borderRadius:"20px",
              border:"none",background:"#0a66c2",color:"#fff",cursor:"pointer"}
};
