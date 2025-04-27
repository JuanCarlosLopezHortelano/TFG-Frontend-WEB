// src/commons/Modal.tsx
import { CSSProperties, ReactNode } from "react";

export function Modal({ open, onClose, children }: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div style={s.backdrop} onClick={onClose}>
      <div style={s.modal} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

const s: Record<string, CSSProperties> = {
  backdrop:{
    position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",
    display:"flex",justifyContent:"center",alignItems:"center",zIndex:1000
  },
  modal:{
    background:"#ffffff",borderRadius:"20px",padding:"32px",
    width:"90%",maxWidth:"480px",
    boxShadow:"8px 8px 16px #d1d9e6,-8px -8px 16px #ffffff"
  }
};