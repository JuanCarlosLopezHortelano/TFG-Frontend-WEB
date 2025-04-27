// src/commons/NavBar.tsx
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSearch, AiOutlinePlusSquare } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo} onClick={() => navigate("/")}>
        TaskIo
      </div>

      {/* Barra de búsqueda */}
      <div style={styles.searchContainer}>
        <AiOutlineSearch size={20} style={{ marginRight: 8, color: "#888" }} />
        <input
          type="text"
          placeholder="Buscar..."
          style={styles.searchInput}
        />
      </div>

      {/* Iconos de navegación */}
      <nav style={styles.iconNav}>
        <NavLink to="/" style={styles.iconLink} end>
          <AiFillHome size={24} />
          <span style={styles.iconLabel}>Inicio</span>
        </NavLink>
        <NavLink to="/mispostulaciones" style={styles.iconLink}>
          <MdDescription size={24} />
          <span style={styles.iconLabel}>Postulaciones</span>
        </NavLink>
        
        <NavLink to="/buscador" style={styles.iconLink}>
          <AiOutlineSearch size={24} />
          <span style={styles.iconLabel}>Buscar</span>
        </NavLink>
        <NavLink to="/creartarea/step-1" style={styles.iconLink}>
          <AiOutlinePlusSquare size={24} />
          <span style={styles.iconLabel}>Crear</span>
        </NavLink>
        <NavLink to="/index" style={styles.iconLink}>
          <RiDashboardLine size={24} />
          <span style={styles.iconLabel}>Index</span>
        </NavLink>
        <NavLink to="/perfil" style={styles.iconLink}>
          <FaUserCircle size={24} />
          <span style={styles.iconLabel}>Perfil</span>
        </NavLink>
      </nav>
    </header>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",      // <-- Centra todos los hijos
    background: "#ffffff",
    padding: "8px 16px",
    boxShadow: "8px 8px 16px #ebebeb, -8px -8px 16px #ffffff",
    gap: "32px",                    // <-- Espacio uniforme entre cada bloque
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#333",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "4px 12px",
    boxShadow: "inset 4px 4px 8px #ebebeb, inset -4px -4px 8px #ffffff",
    width: "300px",
    marginRight: "60px"
  },
  searchInput: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "1rem",
    background: "transparent",
  },
  iconNav: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
    // marginLeft removed para que no empuje al final
  },
  iconLink: {
    display: "flex",
    flexDirection: "column" ,
    alignItems: "center",
    textDecoration: "none",
    color: "#555",
    padding: "4px",
    borderRadius: "8px",
    transition: "background 0.2s",
  },
  iconLabel: {
    fontSize: "0.7rem",
    marginTop: "4px",
  },
};
