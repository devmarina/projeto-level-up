// src/pages/ConteudoDisciplinaEspecifica.jsx
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Badge from "../components/Badge";
import CardUnidade from "../components/CardUnidade";
import BackButton from "../components/BackButton"; // Componente novo
import "./ConteudoDisciplinaEspecifica.css";

export default function ConteudoDisciplinaEspecifica() {
  const navigate = useNavigate();

  // Dados mockados da disciplina
  const unidades = [
    {
      numero: "01",
      nome: "Arrays e Listas",
      descricao: "Conceitos fundamentais de arrays e listas encadeadas...",
      concluida: true
    },
    {
      numero: "02",
      nome: "Pilhas e Filas",
      descricao: "Estruturas LIFO e FIFO e suas aplicações...",
      concluida: true
    },
    {
      numero: "03",
      nome: "Árvores Binárias",
      descricao: "Estruturas hierárquicas e algoritmos de busca...",
      concluida: false
    },
    {
      numero: "04",
      nome: "Grafos",
      descricao: "Representação de conexões complexas e caminhos...",
      concluida: false
    }
  ];

  return (
    <div className="especifica-container">
      {/* Componente de Voltar Padronizado */}
      <BackButton 
        text="Voltar para conteúdos" 
        onClick={() => navigate("/conteudos")} 
      />

      {/* Container Principal de Informações da Disciplina */}
      <section className="info-main-container">
        <div className="info-top-row">
          <div className="info-icon-square">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div className="info-titles">
            <Badge text="ED-01" variant="filled" />
            <h1>Estrutura de Dados</h1>
          </div>
        </div>
        
        <p className="info-description">
          Estudo de estruturas de dados fundamentais e algoritmos básicos para organização de informações.
        </p>
        
        <div className="info-progress-stats">
          <p>Progresso: 2/4 unidades</p>
          <p className="pct-text">50%</p>
        </div>
        <ProgressBar porcentagem={50} />
      </section>

      {/* Container de Unidades (Caixa Branca) */}
      <section className="unidades-white-box">
        <h2>Unidades</h2>
        <div className="unidades-list">
          {unidades.map((unidade) => (
            <CardUnidade 
              key={unidade.numero}
              numero={unidade.numero} 
              nome={unidade.nome} 
              descricao={unidade.descricao}
              concluida={unidade.concluida}
              onAcao={() => console.log(`Acessando unidade ${unidade.numero}`)}
            />
          ))}
        </div>
      </section>

      {/* Grid Inferior de Recursos Adicionais */}
      <div className="recursos-grid">
        <div className="recurso-card" onClick={() => navigate("/flashcards")}>
          <div className="recurso-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c1199" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <div className="recurso-info">
            <strong>Flashcards</strong>
            <span>12 cartões disponíveis</span>
          </div>
        </div>

        <div className="recurso-card" onClick={() => navigate("/questionarios")}>
          <div className="recurso-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6c1199" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              <line x1="9" y1="12" x2="15" y2="12"></line>
              <line x1="9" y1="16" x2="15" y2="16"></line>
            </svg>
          </div>
          <div className="recurso-info">
            <strong>Questionários</strong>
            <span>4 questionários disponíveis</span>
          </div>
        </div>
      </div>
    </div>
  );
}