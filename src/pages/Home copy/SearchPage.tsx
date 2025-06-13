import { CSSProperties, useState } from "react";
import { JobDetailModal, SimpleJob } from "../../components/JobDetailModal";

interface Task extends SimpleJob {}

type Tab = "todo" | "personas" | "tareas";

export default function SearchPage() {
  const [tab, setTab] = useState<Tab>("todo");
  const [location, setLocation] = useState("Todas");
  const [category, setCategory] = useState("Todas");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  /* --- Datos ficticios --- */
  const people = [
    { name: "Alberto García Aparicio", role: "Ingeniero informático", loc: "Albacete" },
    { name: "Mónica Sánchez Ruiz", role: "PMO", loc: "Sevilla" },
  ];
  const tasks: Task[] = [
    {
      title: "Camarero/a para evento",
      loc: "Madrid",
      cat: "Eventos",
      pay: "12 €/h",
      desc: "Servicio de catering para un congreso corporativo.",
    },
    {
      title: "Repartidor tarde",
      loc: "Valencia",
      cat: "Logística",
      pay: "10 €/h",
      desc: "Entrega de paquetería en horario de tarde.",
    },
  ];

  /* --- Filtro simple --- */
  const filteredPeople = people.filter(p =>
    location==="Todas" || p.loc===location
  );
  const filteredTasks = tasks.filter(t =>
    (location==="Todas" || t.loc===location) &&
    (category==="Todas" || t.cat===category)
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Barra superior: chips + filtros */}
      <div style={styles.topBar}>
        {/* Chips */}
        <div style={styles.filterBar}>
          {["Todo","Personas","Tareas"].map(label => {
            const val = label.toLowerCase() as Tab;
            return (
              <button
                key={label}
                style={{
                  ...styles.filterChip,
                  ...(tab === val ? styles.chipActive : {})
                }}
                onClick={() => setTab(val)}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Filtros */}
        <div style={styles.filters}>
          <select
            value={location}
            onChange={e=>setLocation(e.target.value)}
            style={styles.select}
          >
            {["Todas","Albacete","Madrid","Valencia","Sevilla"].map(opt=>(
              <option key={opt}>{opt}</option>
            ))}
          </select>

          {/* Categoría solo para tareas/todo */}
          {(tab==="tareas"||tab==="todo") && (
            <select
              value={category}
              onChange={e=>setCategory(e.target.value)}
              style={styles.select}
            >
              {["Todas","Eventos","Logística","Marketing"].map(c=>(
                <option key={c}>{c}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Contenido */}
      <main style={styles.container}>
        {/* --------- COL CENTRAL --------- */}
        <section style={styles.mainCol}>
          {/* Personas */}
          {(tab==="personas"||tab==="todo") && (
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Personas encontradas</h3>
              {filteredPeople.map(p=>(
                <div key={p.name} style={styles.personItem}>
                  <img src="https://via.placeholder.com/48" style={styles.avatar}/>
                  <div style={{flex:1}}>
                    <strong>{p.name}</strong><br/>
                    <span style={styles.personSubtitle}>{p.role} · {p.loc}</span>
                  </div>
                  <button style={styles.connectBtn}>Conectar</button>
                </div>
              ))}
              <button style={styles.seeAllBtn}>Ver todos los resultados de personas</button>
            </div>
          )}

          {/* Tareas */}
          {(tab==="tareas"||tab==="todo") && (
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Tareas disponibles</h3>
              {filteredTasks.map(t=>(
                <div key={t.title} style={styles.taskItem}>
                  <div>
                    <strong>{t.title}</strong><br/>
                    <span style={styles.personSubtitle}>{t.loc} · {t.pay}</span>
                  </div>
                  <button
                    style={styles.connectBtn}
                    onClick={() => setSelectedTask(t)}
                  >
                    Ver
                  </button>
                </div>
              ))}
              <button style={styles.seeAllBtn}>Ver todas las tareas</button>
            </div>
          )}
        </section>

        {/* --------- SIDEBAR --------- */}
        <aside style={styles.sideCol}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Recomendaciones</h3>
            {["Boeing","Airbus Defence & Space","GE Aerospace"].map(r=>(
              <div key={r} style={styles.recItem}>
                <img src="https://via.placeholder.com/36" style={styles.avatar}/>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </aside>
      </main>
      <JobDetailModal job={selectedTask} open={!!selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
}

/* ---------- ESTILOS ---------- */
const styles: Record<string, CSSProperties> = {
  pageWrapper:{background:"#f5f6f7",minHeight:"100vh",paddingTop:"60px"},
  /* top bar chips + selects */
  topBar:{
    maxWidth:"1200px",margin:"0 auto 24px",padding:"0 24px",
    display:"flex",justifyContent:"space-between",alignItems:"center",gap:"16px",flexWrap:"wrap"
  },
  filterBar:{display:"flex",gap:"12px"},
  filterChip:{background:"#fff",border:"none",padding:"6px 18px",borderRadius:"20px",
              boxShadow:"4px 4px 8px #d1d9e6,-4px -4px 8px #fff",cursor:"pointer"},
  chipActive:{fontWeight:700},

  filters:{display:"flex",gap:"12px"},
  select:{padding:"6px 12px",borderRadius:"8px",border:"1px solid #ccc"},

  container:{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"32px",padding:"0 24px"},
  mainCol:{flex:3,display:"flex",flexDirection:"column",gap:"24px"},
  sideCol:{flex:1,display:"flex",flexDirection:"column",gap:"24px"},

  card:{background:"#fff",borderRadius:"16px",boxShadow:"8px 8px 16px #d1d9e6,-8px -8px 16px #fff",padding:"24px"},
  cardTitle:{margin:"0 0 16px"},

  tabs:{display:"flex",gap:"8px",marginBottom:"16px"},

  personItem:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px"},
  personSubtitle:{fontSize:"0.8rem",color:"#666"},
  avatar:{width:"48px",height:"48px",borderRadius:"50%",objectFit:"cover"},
  connectBtn:{border:"1px solid #0a66c2",background:"#fff",color:"#0a66c2",
              padding:"6px 16px",borderRadius:"20px",cursor:"pointer"},

  taskItem:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},

  recItem:{display:"flex",alignItems:"center",gap:"10px",margin:"8px 0"},

  seeAllBtn:{width:"100%",marginTop:"12px",border:"none",background:"#fff",padding:"10px",
             borderRadius:"12px",boxShadow:"4px 4px 8px #d1d9e6,-4px -4px 8px #fff",
             cursor:"pointer",fontWeight:600},
  taskDesc:{fontSize:"0.9rem",marginTop:"8px",color:"#555"},
};
