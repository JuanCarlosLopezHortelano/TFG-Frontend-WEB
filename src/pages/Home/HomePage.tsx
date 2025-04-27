// src/pages/Home/HomePage.tsx
import { CSSProperties } from "react";

export default function HomePage() {
  return (
    <div style={styles.pageWrapper}>
      <main style={styles.feed}>
        {/* Izquierda */}
        <section style={styles.leftCol}>
          <div style={styles.card}>
            <h2 style={styles.title}>Categorías</h2>
            <div style={styles.chipRow}>
              {["Limpieza","Mudanzas","Jardinería","Reparaciones"].map(c => (
                <span key={c} style={styles.chip}>{c}</span>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.title}>Trabajos Destacados</h2>
            {["Limpieza de oficina - Sur (15€/h)",
              "Ayudante de niños - Este (10€/h)",
              "Jardinero - Oeste (12€/h)",
              "Aprua alacs (??)"].map(job => (
              <div key={job} style={styles.lineItem}>{job}</div>
            ))}
            <button style={styles.moreBtn}>Ver más</button>
          </div>

          <div style={styles.card}>
            <h2 style={styles.title}>Comentarios Recientes</h2>
            {[
              "Great service for finding local jobs",
              "Excelente para trabajos eventuales"
            ].map(c => (
              <div key={c} style={styles.lineItem}>{`"${c}"`}</div>
            ))}
          </div>
        </section>

        {/* Derecha */}
        <aside style={styles.rightCol}>
          <div style={styles.card}>
            <h3 style={styles.title}>Top Jobs</h3>
            {["Adipiscing elit","Sed do eiusmod"].map(j => (
              <div key={j} style={styles.lineItem}>{j}</div>
            ))}
          </div>

          <div style={styles.card}>
            <h3 style={styles.title}>Top Workers</h3>
            {["Lead 1","Lead 2"].map(w => (
              <div key={w} style={styles.lineItem}>{w}</div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}

/* ---------- Estilos ---------- */
const styles: Record<string, CSSProperties> = {
  /* Fondo global gris clarísimo */
  pageWrapper: {
    background: "#f5f6f7",
    minHeight: "100vh",
    paddingTop: "48px",
  },

  /* Feed centrado */
  feed: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "32px",
    padding: "0 24px",
  },

  /* Columnas */
  leftCol: { flex: 3, display: "flex", flexDirection: "column", gap: "32px" },
  rightCol: { flex: 1, display: "flex", flexDirection: "column", gap: "32px" },

  /* Tarjeta neumórfica blanca */
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    padding: "24px",
  },

  /* Chips categoría */
  chipRow: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" },
  chip: {
    background: "#ffffff",
    padding: "6px 14px",
    borderRadius: "12px",
    boxShadow: "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
    cursor: "pointer",
    fontSize: "0.85rem",
  },

  /* Ítems de lista */
  lineItem: {
    background: "#ffffff",
    margin: "8px 0",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff",
    fontSize: "0.9rem",
  },

  /* Botón “Ver más” */
  moreBtn: {
    marginTop: "12px",
    border: "none",
    padding: "8px 24px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff",
    cursor: "pointer",
  },

  title: { margin: 0, marginBottom: "12px" },
};
