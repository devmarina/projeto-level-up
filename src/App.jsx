import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Conteudos from "./pages/Conteudos";
import ConteudoDisciplinaEspecifica from "./pages/ConteudoDisciplinaEspecifica";
import Flashcards from "./pages/Flashcards";
import Revisoes from "./pages/Revisoes";
import Questionarios from "./pages/Questionarios";
import QuestionariosDisciplinaEspecifico from "./pages/QuestionariosDisciplinaEspecifico";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import QuestionarioAtivo from "./pages/QuestionarioAtivo";

function AppContent() {
  const location = useLocation();

  const publicRoutes = ["/", "/cadastro"];
  const hideHeader = publicRoutes.includes(location.pathname);

  return (
    <>
      {" "}
      {!hideHeader && <Header />}{" "}
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />{" "}
        <Route path="/cadastro" element={<Cadastro />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/conteudos" element={<Conteudos />} />{" "}
        <Route
          path="/conteudos/detalhes"
          element={<ConteudoDisciplinaEspecifica />}
        />{" "}
        <Route path="/flashcards" element={<Flashcards />} />{" "}
        <Route path="/revisoes" element={<Revisoes />} />{" "}
        <Route path="/questionarios" element={<Questionarios />} />{" "}
        <Route path="/questionario-ativo" element={<QuestionarioAtivo />} />
        <Route
          path="/questionarios/detalhes"
          element={<QuestionariosDisciplinaEspecifico />}
        />{" "}
      </Routes>{" "}
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
