import React, { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./commons/NavigationBar";
import { Footer } from "./commons/Footer";
import HomePage from "./pages/Home/HomePage";
import MyProfile, { ProfilePage } from "./pages/MyProfile/MyProfilePage";
/*
// Ejemplos de componentes para cada sección
function HomePage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Home</h1>
      <p>Bienvenido a la Home UI. Aquí puedes ver las novedades y ofertas.</p>
    </div>
  );
}
*/
function MisPostulacionesPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Mis Postulaciones</h1>
      <p>Aquí verás tus postulaciones a trabajos.</p>
    </div>
  );
}

function TrabajosRequeridosPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Trabajos Requeridos</h1>
      <p>Listado de trabajos requeridos ofrecidos.</p>
    </div>
  );
}

function CrearTrabajoPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Crear Trabajo</h1>
      <p>Formulario para la creación de una nueva oferta de trabajo.</p>
    </div>
  );
}

function BuscadorPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Buscador</h1>
      <p>Busca trabajos o perfiles utilizando filtros.</p>
    </div>
  );
}

function PerfilPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Perfil</h1>
      <p>Visualiza y edita tu perfil de usuario.</p>
    </div>
  );
}

function App() {
  const { signOut } = useAuthenticator();

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mispostulaciones" element={<MisPostulacionesPage />} />
            <Route path="/trabajosrequeridos" element={<TrabajosRequeridosPage />} />
            <Route path="/creatrabajo" element={<CrearTrabajoPage />} />
            <Route path="/buscador" element={<BuscadorPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/myProfile" element={<ProfilePage />} />
          </Routes>
        </div>
        <Footer />
       
         
      </div>
    </Router>
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

export default App;