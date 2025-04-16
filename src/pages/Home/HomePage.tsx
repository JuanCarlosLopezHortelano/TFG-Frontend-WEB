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
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#f1f1f1",
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#e0e0e0",
    padding: "10px 20px",
    boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
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
    borderRadius: "10px",
    border: "none",
    boxShadow: "inset 3px 3px 5px #bebebe, inset -3px -3px 5px #ffffff",
    outline: "none",
  },
  navIcons: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  navItem: {
    position: "relative",
    padding: "5px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "0.9rem",
    boxShadow: "3px 3px 5px #bebebe, -3px -3px 5px #ffffff",
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
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
    padding: "20px",
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  chip: {
    background: "#e0e0e0",
    padding: "8px 12px",
    borderRadius: "8px",
    boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
    cursor: "pointer",
  },
  featuredJobs: {
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
    padding: "20px",
  },
  jobCard: {
    background: "#e0e0e0",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
  },
  seeMoreButton: {
    marginTop: "10px",
    padding: "8px 16px",
    borderRadius: "8px",
    background: "#e0e0e0",
    border: "none",
    boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
    cursor: "pointer",
  },
  commentsSection: {
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
    padding: "20px",
  },
  commentCard: {
    background: "#e0e0e0",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
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
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
    padding: "20px",
  },
  sidebarCard: {
    background: "#e0e0e0",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff",
  },
  topWorkers: {
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 40px #bebebe, -20px -20px 40px #ffffff",
    padding: "20px",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
};

export default HomePage;
