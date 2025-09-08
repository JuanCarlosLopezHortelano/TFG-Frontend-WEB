// src/pages/TrabajosRequeridos/TrabajosRequeridosPage.tsx
import React, { useState } from 'react';

interface Task {
  id: string;
  title: string;
  location: string;
  rate: number;
}

const filtros = ['Eventos','Hostelería','Logística','Otros'];
const tareasRequeridas: Task[] = [
  { id: '1', title: 'Camarero/a Evento',     location: 'Madrid',   rate: 12 },
  { id: '2', title: 'Mozo/a Almacén',        location: 'Valencia', rate: 11 },
  { id: '3', title: 'Promotor/a Feria',      location: 'Bilbao',   rate: 14 },
  { id: '4', title: 'Repartidor Paquetería', location: 'Sevilla',  rate: 10 },
];

const recomendados: Task[] = [
  { id: 'a', title: 'Gestor/a de Stocks', location: 'Zaragoza', rate: 13 },
  { id: 'b', title: 'Aux. de Cocina',     location: 'Granada',  rate: 15 },
];

export default function TrabajosRequeridosPage() {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const filtered = activeFilter
    ? tareasRequeridas.filter(t =>
        t.title.includes(activeFilter) || t.location.includes(activeFilter)
      )
    : tareasRequeridas;

  return (
    <div style={styles.page}>
      {/* Filtros */}
      <div style={styles.filters}>
        {filtros.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(activeFilter === f ? '' : f)}
            style={{
              ...styles.filterChip,
              ...(activeFilter === f ? styles.filterActive : {}),
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div style={styles.container}>
        {/* Grid */}
        <main style={styles.main}>
          {filtered.map(t => (
            <div key={t.id} style={styles.card}>
              <h4 style={styles.cardTitle}>{t.title}</h4>
              <p style={styles.cardText}>Ubicación: {t.location}</p>
              <p style={styles.cardRate}>{t.rate} €/h</p>
              <button style={styles.btn}>Editar oferta</button>
            </div>
          ))}
        </main>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Recomendados</h3>
          {recomendados.map(r => (
            <div key={r.id} style={styles.smallCard}>
              <h5 style={styles.cardTitle}>{r.title}</h5>
              <p style={styles.cardText}>{r.location}</p>
              <p style={styles.cardRate}>{r.rate} €/h</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: 16,
    fontFamily: 'Arial, sans-serif',
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  filterChip: {
    padding: '6px 12px',
    borderRadius: 20,
    background: '#fff',
    border: '1px solid #ddd',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  filterActive: {
    background: '#e0f3ff',
    borderColor: '#66bfff',
  },
  container: {
    display: 'flex',
    gap: 24,
  },
  main: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
    gap: 24,
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '8px 8px 16px #ddd, -8px -8px 16px #fff',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  smallCard: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '6px 6px 12px #ddd, -6px -6px 12px #fff',
    padding: 12,
  },
  cardTitle: {
    margin: '0 0 8px',
    fontSize: '1.1rem',
  },
  cardText: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#555',
  },
  cardRate: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 'auto',
    padding: '8px 12px',
    borderRadius: 20,
    border: 'none',
    background: '#fff',
    boxShadow: 'inset 4px 4px 8px #ddd, inset -4px -4px 8px #fff',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  sidebar: {
    width: 240,
    flexShrink: 0,
  },
  sidebarTitle: {
    margin: '0 0 12px',
    fontSize: '1.1rem',
  },
};
