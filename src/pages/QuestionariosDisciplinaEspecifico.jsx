// src/pages/QuestionariosDisciplinaEspecifico.jsx
import { useNavigate } from "react-router-dom";
// 1. Importando o SEU botão de voltar
import BackButton from "../components/BackButton";
// 2. Reutilizando o componente de card que já existe
import CardDisciplinaQuestionario from "../components/CardDisciplinaQuestionario";
import "./QuestionariosDisciplinaEspecifico.css";

// Dados dos cards que aparecem na imagem (Conteúdo 1, 2, 3)
const conteudos = [
  {
    id: 101,
    titulo: "Conteúdo 1",
    descricao: "Teste seus conhecimentos sobre estruturas lineares básicas.",
  },
  {
    id: 102,
    titulo: "Conteúdo 2",
    descricao: "Teste seus conhecimentos sobre estruturas lineares básicas.",
  },
  {
    id: 103,
    titulo: "Conteúdo 3",
    descricao: "Teste seus conhecimentos sobre estruturas lineares básicas.",
  },
];

export default function QuestionariosDisciplinaEspecifico() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    console.log(`Clicou no conteúdo ${id}`);
    // Aqui futuramente você colocará a rota para o Quiz
  };

  return (
    <div className="questionario-disciplina-container">
      {/* Usando o seu componente BackButton */}
      <BackButton 
        text="Voltar para questionários" 
        onClick={() => navigate("/questionarios")} 
      />

      {/* Cabeçalho da Disciplina (Disciplina 1) */}
      <div className="disciplina-header">
        <div className="header-icon-box">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>
        <div className="disciplina-info">
          <h2>Disciplina 1</h2>
          <p>{conteudos.length} questionários disponíveis</p>
        </div>
      </div>

      {/* Grid com os cards de CONTEÚDO */}
      <div className="conteudos-grid">
        {conteudos.map((item) => (
          <CardDisciplinaQuestionario
            key={item.id}
            nome={item.titulo}      // Passamos "Conteúdo 1" aqui
            descricao={item.descricao}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
}