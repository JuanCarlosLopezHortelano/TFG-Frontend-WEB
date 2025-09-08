// src/pages/MyProfile/MyProfilePage.tsx
import { CSSProperties } from "react";

export function ProfilePage() {
  return (
    <div style={styles.container}>
      {/* Columna izquierda */}
      <section style={styles.leftSection}>
        {/* Encabezado con foto y valoración */}
        <div style={styles.profileHeader}>
          <img
            src="https://via.placeholder.com/120"
            alt="Foto de Perfil"
            style={styles.profileImage}
          />
          <div>
            <h2 style={styles.profileName}>Andrea García</h2>
            <p style={styles.profileRating}>⭐ 4.8 (120 valoraciones)</p>
            <p style={styles.profileTagline}>
              Promotora de eventos con más de 5 años de experiencia en ferias y
              promociones. Me apasiona el trato con el público.
            </p>
          </div>
        </div>

        {/* Contacto */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Contacto</h3>
          <p>Email: <strong>andrea@example.com</strong></p>
          <p>Teléfono: <strong>+34 612 345 678</strong></p>
        </div>

        {/* Acerca de y Aptitudes */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Acerca de</h3>
          <p>
            Promotora de eventos con más de 5 años de experiencia en ferias y
            promociones. Me apasiona el trato con el público.
            <br/><br/>
            <strong>Aptitudes:</strong> Comunicación, Organización, Trabajo en equipo, Proactividad
          </p>
        </div>

        {/* Actividades completadas */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Actividades Completadas</h3>
          <div style={styles.activityItem}>
            <span>Camarero/a para Evento</span>
            <span style={styles.activityDate}>2025-01-14 15:00</span>
            <strong style={styles.activityPay}>44€</strong>
          </div>
          <div style={styles.activityItem}>
            <span>Mozo/a de Almacén</span>
            <span style={styles.activityDate}>2025-01-16 12:00</span>
            <strong style={styles.activityPay}>48€</strong>
          </div>
        </div>
      </section>

      {/* Columna derecha */}
      <aside style={styles.rightSection}>
        {/* Calendario */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Calendario de Actividades</h3>
          <div style={styles.calendar}>
            <h4 style={styles.calendarMonth}>April 2025</h4>
            <div style={styles.calendarGrid}>
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
                <div key={day} style={styles.calendarHeaderCell}>{day}</div>
              ))}
              {Array.from({ length: 30 }, (_, i) => i+1).map(day => (
                <div key={day} style={styles.calendarDayCell}>{day}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Recomendados */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Más perfiles para ti</h3>
          {["Jose Luis Leitor Martínez","María Pérez"].map(name => (
            <div key={name} style={styles.recommendedUser}>
              <img
                src="https://via.placeholder.com/40"
                alt={name}
                style={styles.recommendedUserImg}
              />
              <p style={styles.recommendedUserName}>{name}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

// Tipado explícito de estilos
const neoCard: CSSProperties = {
  background: "var(--background-color)",
  borderRadius: "12px",
  boxShadow: "8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)",
};

const smallCard: CSSProperties = {
  background: "var(--background-color)",
  borderRadius: "12px",
  boxShadow: "4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)",
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "20px",
    minHeight: "100vh",
    background: "var(--background-color)",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  leftSection: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  profileHeader: {
    ...neoCard,
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)",
  },
  profileName: {
    margin: 0,
    fontSize: "1.5rem",
  },
  profileRating: {
    margin: "5px 0",
    fontWeight: "bold",
    color: "#666",
  },
  profileTagline: {
    margin: 0,
    color: "#777",
  },
  card: {
    ...neoCard,
    padding: "20px",
  },
  cardTitle: {
    margin: 0,
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
  activityItem: {
    ...smallCard,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px",
  },
  activityDate: {
    fontSize: "0.9rem",
    color: "#666",
  },
  activityPay: {
    color: "#4A4A4A",
  },
  calendar: {
    ...neoCard,
    padding: "10px",
  },
  calendarMonth: {
    margin: 0,
    textAlign: "center",
    marginBottom: "10px",
  },
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "5px",
  },
  calendarHeaderCell: {
    fontWeight: "bold",
    textAlign: "center",
  },
  calendarDayCell: {
    ...smallCard,
    padding: "8px 0",
    textAlign: "center",
  },
  recommendedUser: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  recommendedUserImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)",
  },
  recommendedUserName: {
    margin: 0,
    fontWeight: "bold",
  },
};
