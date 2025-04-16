import React from "react";

export function ProfilePage() {
  return (
    <div style={styles.container}>
      {/* Columna izquierda: Datos de perfil */}
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

        {/* Sección de contacto */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Contacto</h3>
          <p>Email: <strong>andrea@example.com</strong></p>
          <p>Teléfono: <strong>+34 612 345 678</strong></p>
        </div>

        {/* Acerca de / aptitudes */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Acerca de</h3>
          <p>
            Promotora de eventos con más de 5 años de experiencia en ferias y
            promociones. Me apasiona el trato con el público. 
            <br/>
            <br/>
            <strong>Aptitudes:</strong> Comunicación, Organización, Trabajo en equipo, 
            Proactividad
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Actividades Completadas</h3>
          <div style={styles.activityItem}>
            <p>Camarero/a para Evento</p>
            <p style={styles.activityDate}>2025-01-14T15:00Z</p>
            <p style={styles.activityPay}>↘︎ 44€</p>
          </div>
          <div style={styles.activityItem}>
            <p>Mozo/a de Almacén</p>
            <p style={styles.activityDate}>2025-01-16T12:00Z</p>
            <p style={styles.activityPay}>↘︎ 48€</p>
          </div>
        </div>


      </section>

      {/* Columna derecha: Actividades completadas, calendario y personas recomendadas */}
      <aside style={styles.rightSection}>
       

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Calendario de Actividades</h3>
          <div style={styles.calendar}>
            <h4 style={styles.calendarMonth}>April 2025</h4>
            {/* Simplificación de un calendario estático */}
            <div style={styles.calendarGrid}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} style={styles.calendarHeaderCell}>
                  {day}
                </div>
              ))}
              {/* Generamos 30 días como ejemplo */}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <div key={day} style={styles.calendarDayCell}>
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Más perfiles para ti</h3>
          <div style={styles.recommendedUser}>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              style={styles.recommendedUserImg}
            />
            <p style={styles.recommendedUserName}>
              Jose Luis Leitor Martínez
            </p>
          </div>
          <div style={styles.recommendedUser}>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              style={styles.recommendedUserImg}
            />
            <p style={styles.recommendedUserName}>María Pérez</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "20px",
    minHeight: "100vh",
    background: "#f1f1f1",
    fontFamily: "Arial, sans-serif",
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
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
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
    boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
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
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
    padding: "20px",
  },
  cardTitle: {
    margin: 0,
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
  activityItem: {
    background: "#e0e0e0",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityDate: {
    fontSize: "0.9rem",
    color: "#666",
  },
  activityPay: {
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  calendar: {
    background: "#e0e0e0",
    borderRadius: "8px",
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
    background: "#e0e0e0",
    padding: "8px 0",
    borderRadius: "8px",
    boxShadow: "inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff",
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
    boxShadow: "inset 1px 1px 2px #bebebe, inset -1px -1px 2px #ffffff",
  },
  recommendedUserName: {
    margin: 0,
    fontWeight: "bold",
  },
};

export default ProfilePage;
