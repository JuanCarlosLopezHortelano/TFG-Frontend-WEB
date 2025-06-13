import { CSSProperties } from "react";
import { Modal } from "./Modal";

export interface SimpleJob {
  title: string;
  loc: string;
  cat: string;
  pay: string;
  desc: string;
}

export function JobDetailModal({
  job,
  open,
  onClose,
}: {
  job: SimpleJob | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!job) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <div style={st.container}>
        <h2 style={st.title}>{job.title}</h2>
        <p style={st.meta}>{job.loc} · {job.cat}</p>
        <p style={st.pay}>{job.pay}</p>
        <p style={st.desc}>{job.desc}</p>
        <button style={st.closeBtn} onClick={onClose}>Cerrar</button>
      </div>
    </Modal>
  );
}

const st: Record<string, CSSProperties> = {
  container: { textAlign: "center" },
  title: { margin: "0 0 8px" },
  meta: { color: "#666", margin: "0 0 12px" },
  pay: { fontWeight: 600, margin: "0 0 12px" },
  desc: { marginBottom: 20 },
  closeBtn: {
    background: "#0a66c2",
    border: "none",
    color: "white",
    padding: "8px 24px",
    borderRadius: 20,
    cursor: "pointer",
  },
};
