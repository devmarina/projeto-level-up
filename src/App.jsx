// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Importando as páginas que criamos
import Dashboard from "./pages/Dashboard";
import Conteudos from "./pages/Conteudos";
import Flashcards from "./pages/Flashcards";
import Revisoes from "./pages/Revisoes";
import Questionarios from "./pages/Questionarios";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header /> 

      <Routes>
        {/* Rota inicial */}
        <Route path="/" element={<Login />} />
        
        {/* Rotas principais */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conteudos" element={<Conteudos />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/revisoes" element={<Revisoes />} />
        <Route path="/questionarios" element={<Questionarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;