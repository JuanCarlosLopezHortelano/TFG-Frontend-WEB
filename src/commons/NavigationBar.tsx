// src/commons/NavBar.tsx
import React from "react";
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
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...styles.iconLink,
            color: isActive ? "var(--primary-color)" : "#666",
            borderBottom: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
            boxShadow: isActive ? styles.iconLinkActive.boxShadow : styles.iconLink.boxShadow,
          })}
        >
          <AiFillHome size={24} />
          <span style={styles.iconLabel}>Inicio</span>
        </NavLink>
        <NavLink
          to="/mispostulaciones"
          style={({ isActive }) => ({
            ...styles.iconLink,
            color: isActive ? "var(--primary-color)" : "#666",
            borderBottom: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
            boxShadow: isActive ? styles.iconLinkActive.boxShadow : styles.iconLink.boxShadow,
          })}
        >
          <MdDescription size={24} />
          <span style={styles.iconLabel}>Postulaciones</span>
        </NavLink>
        <NavLink
          to="/perfil"
          style={({ isActive }) => ({
            ...styles.iconLink,
            color: isActive ? "var(--primary-color)" : "#666",
            borderBottom: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
            boxShadow: isActive ? styles.iconLinkActive.boxShadow : styles.iconLink.boxShadow,
          })}
        >
          <FaUserCircle size={24} />
          <span style={styles.iconLabel}>Perfil</span>
        </NavLink>
        <NavLink
          to="/buscador"
          style={({ isActive }) => ({
            ...styles.iconLink,
            color: isActive ? "var(--primary-color)" : "#666",
            borderBottom: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
            boxShadow: isActive ? styles.iconLinkActive.boxShadow : styles.iconLink.boxShadow,
          })}
        >
          <AiOutlineSearch size={24} />
          <span style={styles.iconLabel}>Buscar</span>
        </NavLink>
        <NavLink
          to="/creatrabajo"
          style={({ isActive }) => ({
            ...styles.iconLink,
            color: isActive ? "var(--primary-color)" : "#666",
            borderBottom: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
            boxShadow: isActive ? styles.iconLinkActive.boxShadow : styles.iconLink.boxShadow,
          })}
        >
          <AiOutlinePlusSquare size={24} />
          <span style={styles.iconLabel}>Crear</span>
        </NavLink>
        <NavLink
          to="/myProfile"
          style={({ isActive }) => ({
            ...styles.iconLink,
            color: isActive ? "var(--primary-color)" : "#666",
            borderBottom: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
            boxShadow: isActive ? styles.iconLinkActive.boxShadow : styles.iconLink.boxShadow,
          })}
        >
          <RiDashboardLine size={24} />
          <span style={styles.iconLabel}>Mi Perfil</span>
        </NavLink>
      </nav>
    </header>
  );
}

const neoShadow = "8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)";
const smallShadow = "4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)";
const insetShadow = "inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)";

const styles: { [k: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--background-color)",
    padding: "0 24px",
    boxShadow: neoShadow,
    gap: "32px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "var(--primary-color)",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    background: "var(--background-color)",
    borderRadius: "12px",
    padding: "0 8px",
    width: "280px",
    boxShadow: smallShadow,
  },
  searchInput: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "0.9rem",
    background: "transparent",
  },
  iconNav: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },
  iconLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#666",
    padding: "4px 8px",
    fontSize: "0.75rem",
    borderRadius: "12px",
    boxShadow: smallShadow,
    background: "var(--background-color)",
    transition: "box-shadow 0.2s",
  },
  iconLinkActive: {
    boxShadow: insetShadow,
  },
  iconLabel: {
    marginTop: "4px",
  },
};
