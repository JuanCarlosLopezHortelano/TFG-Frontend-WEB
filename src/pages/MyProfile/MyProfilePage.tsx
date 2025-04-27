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

//* ----- ESTILOS ----- */
const styles: Record<string, CSSProperties> = {
  /* Fondo general gris clarísimo */
  pageWrapper: {
    background: "#f5f6f7",
    minHeight: "100vh",
    paddingTop: "40px",
  },

  /* *Caja* centrada como en LinkedIn */
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    margin: "0 auto",          // ⬅️ centra el contenedor
    maxWidth: "1200px",        // ⬅️ ancho máx
    padding: "0 24px",
    fontFamily: "Arial, sans-serif",
  },

  /* Columna izquierda / derecha idénticas, sólo cambiamos fondos */
  leftSection: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  /* Tarjetas blancas con sombra neumórfica sutil */
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    padding: "24px",
  },

  /* Encabezado de perfil ― igual fondo blanco */
  profileHeader: {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  /* Resto sin cambios, solo actualizamos el color de los minitarjetones */
  activityItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    margin: "12px 0",
    padding: "12px",
    borderRadius: "10px",
    boxShadow: "inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff",
  },

  calendar: { background: "#ffffff", borderRadius: "10px" },
  calendarDayCell: {
    background: "#ffffff",
    boxShadow: "inset 1px 1px 3px #d1d9e6, inset -1px -1px 3px #ffffff",
    padding: "6px 0",
    borderRadius: "6px",
    textAlign: "center",
  },

  /* Imagen, títulos, etc. se mantienen */
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff",
  },
  profileName: { margin: 0, fontSize: "1.5rem" },
  profileRating: { margin: "6px 0", fontWeight: "bold", color: "#666" },
  profileTagline: { margin: 0, color: "#777" },
  cardTitle: { margin: 0, marginBottom: "12px", fontSize: "1.2rem" },

  calendarMonth: { margin: 0, textAlign: "center", marginBottom: "10px" },
  calendarGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "4px" },
  calendarHeaderCell: { fontWeight: "bold", textAlign: "center" },

  recommendedUser: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" },
  recommendedUserImg: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "inset 1px 1px 3px #d1d9e6, inset -1px -1px 3px #ffffff",
  },
  recommendedUserName: { margin: 0, fontWeight: "bold" },
};