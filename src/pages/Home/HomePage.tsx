import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      

      {/* Contenido principal */}
      <main style={styles.mainContent}>
        {/* Sección izquierda: Categorías y trabajos destacados */}
        <section style={styles.leftSection}>
          <div style={styles.categoriesContainer}>
            <h2 style={styles.sectionTitle}>Categorías</h2>
            <div style={styles.chipContainer}>
              <div style={styles.chip}>Limpieza</div>
              <div style={styles.chip}>Mudanzas</div>
              <div style={styles.chip}>Jardinería</div>
              <div style={styles.chip}>Reparaciones</div>
              {/* Agrega más categorías según necesites */}
            </div>
          </div>

          <div style={styles.featuredJobs}>
            <h2 style={styles.sectionTitle}>Trabajos Destacados</h2>
            <div style={styles.jobCard}>Limpieza de oficina - Sur (15€/h)</div>
            <div style={styles.jobCard}>Ayudante de niños - Este (10€/h)</div>
            <div style={styles.jobCard}>Jardinero - Oeste (12€/h)</div>
            <div style={styles.jobCard}>Aprua alacs (??)</div>
            {/* Botón o link de ver más */}
            <button style={styles.seeMoreButton}>Ver más</button>
          </div>

          {/* Comentarios a tareas resueltas */}
          <div style={styles.commentsSection}>
            <h2 style={styles.sectionTitle}>Comentarios Recientes</h2>
            <div style={styles.commentCard}>
              <p style={styles.commentText}>
                "Great service for finding local jobs"
              </p>
            </div>
            <div style={styles.commentCard}>
              <p style={styles.commentText}>
                "Excelente para trabajos eventuales"
              </p>
            </div>
          </div>
        </section>

        {/* Sección derecha: Top Jobs, Top Workers */}
        <aside style={styles.rightSection}>
          <div style={styles.topJobs}>
            <h3 style={styles.sectionTitle}>Top Jobs</h3>
            <div style={styles.sidebarCard}>Adipiscing elit</div>
            <div style={styles.sidebarCard}>Sed do eiusmod</div>
          </div>
          <div style={styles.topWorkers}>
            <h3 style={styles.sectionTitle}>Top Workers</h3>
            <div style={styles.sidebarCard}>Lead 1</div>
            <div style={styles.sidebarCard}>Lead 2</div>
          </div>
        </aside>
      </main>
    </div>
  );
}

// Estilos base (neumórficos)
const neoCard: React.CSSProperties = {
  background: "var(--background-color)",
  borderRadius: "12px",
  boxShadow: "8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)",
};

const smallCard: React.CSSProperties = {
  background: "var(--background-color)",
  borderRadius: "12px",
  boxShadow: "4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)",
};

const neoButton: React.CSSProperties = {
  background: "var(--primary-color)",
  color: "#ffffff",
  border: "none",
  borderRadius: "16px",
  boxShadow: "4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)",
  cursor: "pointer",
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "var(--background-color)",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ffffff",
    padding: "10px 20px",
    borderBottom: "1px solid #dcdcdc",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  searchWrapper: {
    flex: 1,
    marginLeft: "20px",
    marginRight: "20px",
  },
  searchInput: {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #dcdcdc",
    outline: "none",
    background: "#ffffff",
  },
  navIcons: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  navItem: {
    position: "relative",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    color: "#666",
  },
  profile: {
    display: "flex",
    alignItems: "center",
  },
  profileImg: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
  },

  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    gap: "20px",
  },
  leftSection: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  categoriesContainer: {
    ...neoCard,
    padding: "20px",
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  chip: {
    ...smallCard,
    padding: "8px 12px",
    cursor: "pointer",
  },
  featuredJobs: {
    ...neoCard,
    padding: "20px",
  },
  jobCard: {
    ...smallCard,
    margin: "10px 0",
    padding: "10px",
  },
  seeMoreButton: {
    ...neoButton,
    marginTop: "10px",
    padding: "8px 16px",
  },
  commentsSection: {
    ...neoCard,
    padding: "20px",
  },
  commentCard: {
    ...smallCard,
    margin: "10px 0",
    padding: "10px",
  },
  commentText: {
    margin: 0,
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  topJobs: {
    ...neoCard,
    padding: "20px",
  },
  sidebarCard: {
    ...smallCard,
    margin: "10px 0",
    padding: "10px",
  },
  topWorkers: {
    ...neoCard,
    padding: "20px",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
};

export default HomePage;
