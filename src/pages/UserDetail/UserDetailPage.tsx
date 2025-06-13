import { CSSProperties } from "react";
import { useParams } from "react-router-dom";

interface User {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  phone?: string;
  about: string;
  aptitudes: { name: string }[];
}

interface Activity {
  id: string;
  userId: string;
  title: string;
  date: string;
  rating: number;
  comment: string;
}

// --- Datos simulados ---
const mockUsers: User[] = [
  {
    id: "1",
    name: "Andrea García",
    avatarUrl: "https://via.placeholder.com/120",
    email: "andrea@example.com",
    phone: "+34 612 345 678",
    about:
      "Promotora de eventos con más de 5 años de experiencia en ferias y promociones. Me apasiona el trato con el público.",
    aptitudes: [
      { name: "Comunicación" },
      { name: "Organización" },
      { name: "Trabajo en equipo" },
      { name: "Proactividad" },
    ],
  },
];

const mockActivities: Activity[] = [
  {
    id: "a1",
    userId: "1",
    title: "Camarero/a para Evento",
    date: "2025-01-14 15:00",
    rating: 4.5,
    comment: "Muy profesional y amable.",
  },
  {
    id: "a2",
    userId: "1",
    title: "Mozo/a de Almacén",
    date: "2025-01-16 12:00",
    rating: 4.8,
    comment: "Gran capacidad de trabajo en equipo.",
  },
];

export default function UserDetailPage() {
  const { userId } = useParams<{ userId: string }>();
  const user = mockUsers.find((u) => u.id === userId) ?? mockUsers[0];

  const userActivities = mockActivities.filter((a) => a.userId === user.id);
  const globalRating =
    userActivities.reduce((sum, a) => sum + a.rating, 0) / userActivities.length || 0;

  return (
    <div style={st.page}>
      <div style={st.mainContainer}>
        <section style={st.headerSection}>
          <img src={user.avatarUrl} alt={user.name} style={st.avatar} />
          <h2 style={st.userName}>{user.name}</h2>
          <p style={st.ratingText}>Valoración Global: ⭐ {globalRating.toFixed(1)}</p>
        </section>

        <section style={st.card}>
          <h3 style={st.cardTitle}>Contacto</h3>
          <p style={st.sectionText}>Email: <strong>{user.email}</strong></p>
          {user.phone && (
            <p style={st.sectionText}>Teléfono: <strong>{user.phone}</strong></p>
          )}
        </section>

        <section style={st.card}>
          <h3 style={st.cardTitle}>Acerca de</h3>
          <p style={st.sectionText}>{user.about}</p>
        </section>

        <section style={st.card}>
          <h3 style={st.cardTitle}>Aptitudes</h3>
          {user.aptitudes.map((apt) => (
            <p key={apt.name} style={st.listItem}>- {apt.name}</p>
          ))}
        </section>

        <section style={st.card}>
          <h3 style={st.cardTitle}>Actividades Recientes</h3>
          {userActivities.map((act) => (
            <div key={act.id} style={st.activityItem}>
              <div style={st.activityHeader}>
                <span style={st.activityTitle}>{act.title}</span>
                <span style={st.activityDate}>{act.date}</span>
              </div>
              <p style={st.activityRating}>Valoración: ⭐ {act.rating.toFixed(1)}</p>
              <p style={st.activityComment}>Comentario: "{act.comment}"</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

const containerBg = "#f5f6f7";
const elementBg = "#ffffff";

const st: Record<string, CSSProperties> = {
  page: {
    background: containerBg,
    minHeight: "100vh",
    paddingTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
  mainContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "0 24px",
  },
  headerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    background: elementBg,
    borderRadius: "16px",
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    padding: "24px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff",
  },
  userName: { margin: 0, fontSize: "1.5rem" },
  ratingText: { margin: 0, fontWeight: 600, color: "#666" },
  card: {
    background: elementBg,
    borderRadius: "16px",
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    padding: "24px",
  },
  cardTitle: { margin: 0, marginBottom: "12px", fontSize: "1.2rem", color: "#333" },
  sectionText: { fontSize: "0.9rem", color: "#555", margin: "8px 0" },
  listItem: { fontSize: "0.9rem", color: "#555", margin: "4px 0" },
  activityItem: { marginBottom: "20px" },
  activityHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityTitle: { fontWeight: 600, color: "#333" },
  activityDate: { fontSize: "0.8rem", color: "#777" },
  activityRating: { fontSize: "0.8rem", color: "#555", marginTop: "4px" },
  activityComment: { fontSize: "0.9rem", color: "#555" },
};
