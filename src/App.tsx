
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./commons/NavigationBar";
import { Footer } from "./commons/Footer";
import HomePage from "./pages/Home/HomePage";
import  { ProfilePage } from "./pages/MyProfile/MyProfilePage";
import SearchPage from "./pages/Home copy/SearchPage";
import CreateTaskWizard from "./pages/CreateTask/CreateTaskWizard";
import { WizardProvider } from "./pages/CreateTask/TaskDraftContext"; // Adjust the path as needed
import MisPostulacionesPage from "./pages/MisPostulacionesPage/MisPostulacionesPage";
import TrabajosRequeridosPage from "./pages/TrabajosRequeridos/TrabajosRequeridosPage";

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
/*
function MisPostulacionesPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Pruebas</h1>
      <p>Aquí verás tus postulaciones a trabajos.</p>
    </div>
  );
}
*/

/*
function TrabajosRequeridosPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Trabajos Requeridos</h1>
      <p>Listado de trabajos requeridos ofrecidos.</p>
    </div>
  );
}

*/

/*
function CrearTrabajoPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Crear Trabajo</h1>
      <p>Formulario para la creación de una nueva oferta de trabajo.</p>
    </div>
  );
}
*/
/*

function BuscadorPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Buscador</h1>
      <p>Busca trabajos o perfiles utilizando filtros.</p>
    </div>
  );
}
*/
// Ejemplo de componente para la página de perfil
/*
function PerfilPage() {
  return (
    <div style={styles.pageContainer}>
      <h1>Perfil</h1>
      <p>Visualiza y edita tu perfil de usuario.</p>
    </div>
  );
}
*/

function App() {
  return (
    <Router>
      <NavBar />                     {/* el NavBar fuera de Routes */}
      <div className="content-area">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/postulaciones" element={<MisPostulacionesPage />} />
          <Route path="/trabajosrequeridos" element={<TrabajosRequeridosPage />} />
          <Route path="/buscador" element={<SearchPage />} />
          <Route path="/perfil" element={<ProfilePage />} />

          {/* Wizard multi‑step */}
          <Route
                path="/creartarea/*"
                element={
                  <WizardProvider>
                    <CreateTaskWizard />
                  </WizardProvider>
                }
              />
        </Routes>
      </div>
      <Footer />
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