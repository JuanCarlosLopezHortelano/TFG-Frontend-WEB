// src/pages/MisPostulaciones/MisPostulacionesPage.tsx
import React, { useState } from 'react';

interface Application {
  id: string;
  jobTitle: string;
  jobLocation: string;
  appliedAt: string;
  status: 'pending' | 'accepted' | 'rejected';
}

const filtrosApp = ['Pendientes','Aceptadas','Rechazadas'];
const postulaciones: Application[] = [
  { id:'1', jobTitle:'Camarero/a Evento', jobLocation:'Madrid', appliedAt:'2025-04-01', status:'pending' },
  { id:'2', jobTitle:'Mozo/a Almacén',   jobLocation:'Valencia', appliedAt:'2025-03-28', status:'accepted' },
  { id:'3', jobTitle:'Promotor/a Feria',  jobLocation:'Bilbao',   appliedAt:'2025-03-25', status:'rejected' },
  { id:'4', jobTitle:'Aux. Cocina',       jobLocation:'Granada',  appliedAt:'2025-03-22', status:'pending' },
];

const recomendacionesApp: Application[] = [
  { id:'a', jobTitle:'Repartidor Paq.', jobLocation:'Sevilla', appliedAt:'', status:'pending' },
  { id:'b', jobTitle:'Gestor/a Stocks', jobLocation:'Zaragoza', appliedAt:'', status:'pending' },
];

export default function MisPostulacionesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const filtered = activeFilter
    ? postulaciones.filter(p => p.status === activeFilter.toLowerCase())
    : postulaciones;

  return (
    <div style={styles.page}>
      {/* Filtros */}
      <div style={styles.filters}>
        {filtrosApp.map(f => (
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

      <div style={styles.container}>
        {/* Postulaciones */}
        <main style={styles.main}>
          {filtered.map(p => (
            <div key={p.id} style={styles.card}>
              <h4 style={styles.cardTitle}>{p.jobTitle}</h4>
              <p style={styles.cardText}>{p.jobLocation}</p>
              <p style={styles.cardSmall}>Postulado: {p.appliedAt}</p>
              <p style={{
                ...styles.status,
                color:
                  p.status==='accepted' ? 'green' :
                  p.status==='rejected' ? 'red' : 'orange',
              }}>
                {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
              </p>
            </div>
          ))}
        </main>

        {/* Recomendasiones */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Otras ofertas</h3>
          {recomendacionesApp.map(r => (
            <div key={r.id} style={styles.smallCard}>
              <h5 style={styles.cardTitle}>{r.jobTitle}</h5>
              <p style={styles.cardText}>{r.jobLocation}</p>
              <button style={styles.btn}>Postularme</button>
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
  cardSmall: {
    margin: '4px 0',
    fontSize: '0.8rem',
    color: '#777',
  },
  status: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  smallCard: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '6px 6px 12px #ddd, -6px -6px 12px #fff',
    padding: 12,
  },
  btn: {
    marginTop: 8,
    padding: '6px 12px',
    borderRadius: 20,
    border: 'none',
    background: '#fff',
    boxShadow: 'inset 4px 4px 8px #ddd, inset -4px -4px 8px #fff',
    cursor: 'pointer',
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
