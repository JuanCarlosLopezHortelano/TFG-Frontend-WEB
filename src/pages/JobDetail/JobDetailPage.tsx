import { CSSProperties } from "react";
import { useParams } from "react-router-dom";

// Datos simulados de trabajos
const mockJobs = [
  {
    id: "1",
    title: "Camarero/a para evento",
    shortDescription: "Servicio de catering para un congreso corporativo.",
    longDescription:
      "Se requiere personal para atender mesas y servir bebidas durante un evento empresarial. Experiencia previa valorable.",
    category: "Eventos",
    location: "Madrid",
    rate: 12,
    rating: 4.6,
  },
];

export default function JobDetailPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const job = mockJobs.find((j) => j.id === jobId) ?? mockJobs[0];

  const personName = "Andrea G.";
  const personAvatar = "https://via.placeholder.com/40";
  const averageRating = job.rating ?? 0;
  const lastRating = 5.0;
  const lastComment =
    "Excelente trabajo, muy organizada y con mucha iniciativa. Recomendadísima.";

  const handleApply = () => {
    console.log("Aplicar a la tarea", job.id);
  };

  return (
    <div style={st.page}>
      <div style={st.mainContainer}>
        <h2 style={st.taskTitle}>{job.title}</h2>

        <div style={st.personRow}>
          <img src={personAvatar} alt={personName} style={st.avatar} />
          <span style={st.personName}>{personName}</span>
        </div>

        <p style={st.taskCategory}>Categoría: {job.category}</p>
        <p style={st.shortDescription}>{job.shortDescription}</p>
        <p style={st.rateText}>Pago: {job.rate} €/hora</p>

        <button style={st.applyButton} onClick={handleApply}>
          Aplicar
        </button>

        <div style={st.sectionContainer}>
          <h3 style={st.sectionTitle}>Descripción de la Tarea</h3>
          <p style={st.sectionText}>{job.longDescription}</p>
        </div>

        <div style={st.sectionContainer}>
          <h3 style={st.sectionTitle}>Acerca del Solicitante</h3>
          <p style={st.sectionText}>
            Calificaciones medias: ⭐ {averageRating.toFixed(1)}
          </p>
          <p style={st.sectionText}>Última calificación: ⭐ {lastRating.toFixed(1)}</p>
          <p style={st.sectionText}>Último comentario: "{lastComment}"</p>
        </div>
      </div>
    </div>
  );
}

const containerBg = "#E9ECF2";
const elementBg = "#FFFFFF";

const st: Record<string, CSSProperties> = {
  page: {
    background: containerBg,
    minHeight: "100vh",
    padding: 32,
    display: "flex",
    justifyContent: "center",
  },
  mainContainer: {
    background: elementBg,
    borderRadius: 20,
    padding: 24,
    maxWidth: 600,
    width: "100%",
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
  },
  taskTitle: { fontSize: "1.4rem", fontWeight: 700, marginBottom: 15, color: "#333" },
  personRow: { display: "flex", alignItems: "center", marginBottom: 20 },
  avatar: { width: 40, height: 40, borderRadius: "50%", marginRight: 10 },
  personName: { fontSize: "1rem", fontWeight: 500, color: "#555" },
  taskCategory: { fontSize: "0.9rem", color: "#555", marginBottom: 10 },
  shortDescription: { fontSize: "0.9rem", color: "#555", marginBottom: 20, lineHeight: 1.4 },
  rateText: { fontSize: "1rem", fontWeight: 600, color: "#333", marginBottom: 20 },
  applyButton: {
    background: "#4C74D9",
    padding: "10px 24px",
    borderRadius: 25,
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginBottom: 30,
    boxShadow: "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
  },
  sectionContainer: {
    background: elementBg,
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    boxShadow: "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
  },
  sectionTitle: { fontSize: "1rem", fontWeight: 600, color: "#333", marginBottom: 15 },
  sectionText: { fontSize: "0.9rem", color: "#555", lineHeight: 1.4, marginBottom: 10 },
};
