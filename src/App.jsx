// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";

// Importando as páginas
import Dashboard from "./pages/Dashboard";
import Conteudos from "./pages/Conteudos";
import Flashcards from "./pages/Flashcards";
import Revisoes from "./pages/Revisoes";
import Questionarios from "./pages/Questionarios";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"; 

// Componente de Layout interno
function AppContent() {
  const location = useLocation();
  
  // Verifica se a rota atual é Login ou Cadastro
  const publicRoutes = ["/", "/cadastro"];
  const hideHeader = publicRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conteudos" element={<Conteudos />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/revisoes" element={<Revisoes />} />
        <Route path="/questionarios" element={<Questionarios />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;