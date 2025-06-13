import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
}

export default function TaskListPage() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const tasks: Task[] = [
    { id: 1, title: "Limpieza de oficina", description: "5h - 15€/h" },
    { id: 2, title: "Cuidado de niños", description: "4h - 10€/h" },
  ];

  const handleApply = (task: Task) => {
    setSelectedTask(task);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application data", { task: selectedTask, ...formData });
    alert("Solicitud enviada!");
    setSelectedTask(null);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Trabajos Disponibles</h1>
      {tasks.map(task => (
        <div key={task.id} style={styles.taskCard}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button style={styles.applyButton} onClick={() => handleApply(task)}>
            Aplicar
          </button>
        </div>
      ))}
      {selectedTask && (
        <div style={styles.modalBackdrop}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <h2 style={styles.formTitle}>Solicitar: {selectedTask.title}</h2>
            <label>
              Nombre
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
            <label>
              Mensaje
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
              />
            </label>
            <div style={styles.buttonRow}>
              <button type="button" onClick={() => setSelectedTask(null)} style={styles.cancelButton}>
                Cancelar
              </button>
              <button type="submit" style={styles.submitButton}>Enviar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
  },
  taskCard: {
    background: "#e0e0e0",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
  },
  applyButton: {
    marginTop: "8px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
    minWidth: "300px",
  },
  formTitle: {
    marginTop: 0,
    marginBottom: "12px",
  },
  input: {
    width: "100%",
    margin: "4px 0 12px",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    minHeight: "80px",
    margin: "4px 0 12px",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  },
  cancelButton: {
    background: "#ccc",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  submitButton: {
    background: "#4caf50",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

