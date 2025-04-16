
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";




// Componente de la barra de navegación usando NavLink para resaltar el enlace activo


export function NavigationBar() {
    return (
      <nav style={styles.navBar}>
        <ul style={styles.navList}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }: { isActive: boolean }) =>
                isActive ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mispostulaciones"
              style={({ isActive }: { isActive: boolean }) =>
                isActive ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem
              }
            >
              MisPostulaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trabajosrequeridos"
              style={({ isActive }: { isActive: boolean }) =>
                isActive ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem
              }
            >
              Trabajos Requeridos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/creatrabajo"
              style={({ isActive }: { isActive: boolean }) =>
                isActive ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem
              }
            >
              Crear Trabajo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buscador"
              style={({ isActive }: { isActive: boolean }) =>
                isActive ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem
              }
            >
              Buscador
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/perfil"
              style={({ isActive }: { isActive: boolean }) =>
                isActive ? { ...styles.navItem, ...styles.navItemActive } : styles.navItem
              }
            >
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

// Algunos estilos básicos (ajústalos para conseguir el efecto deseado)
const styles = {
  appContainer: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navBar: {
    background: "#e0e0e0",
    padding: "10px 20px",
    boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "8px",
    transition: "background 0.3s",
    textDecoration: "none",
    color: "inherit",
  },
  navItemActive: {
    background: "#d0d0d0",
  },
  contentArea: {
    flex: 1,
    padding: "20px",
    background: "#f0f0f3",
  },
  pageContainer: {
    background: "#e0e0e0",
    borderRadius: "16px",
    boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "800px",
  },
  footer: {
    padding: "10px",
    textAlign: "center" ,
    background: "#e0e0e0",
  },
  signOutButton: {
    background: "#e0e0e0",
    border: "none",
    outline: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "8px 8px 16px #bebebe, -8px -8px 16px #ffffff",
    cursor: "pointer",
  },
};
