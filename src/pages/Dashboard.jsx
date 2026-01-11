import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FlashcardViewer from "../components/FlashcardViewer"; // Nome conforme seu export default
import CardDisciplinaQuestionario from "../components/CardDisciplinaQuestionario";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Dados simulados (Back-end)
  const [userStats] = useState({
    nome: "Gabriel",
    revisoesHoje: 2,
    disciplinasConcluidas: 3,
    totalDisciplinas: 3
  });

  // Estado para o Flashcard de Revisão Rápida
  const [revisaoRapida] = useState({
    pergunta: "O que é uma lista encadeada?",
    resposta: "Uma lista encadeada é uma estrutura de dados linear onde cada elemento (nó) contém um valor e uma referência (link) para o próximo nó.",
    dificuldade: "Fácil"
  });

  const questionariosSugeridos = [
    { id: 1, nome: "Estrutura de Dados", descricao: "Teste seus conhecimentos sobre estruturas lineares básicas." },
    { id: 2, nome: "Banco de Dados", descricao: "Modelagem relacional e linguagem SQL." }
  ];

  return (
    <div className="dashboard-container">
      
      {/* 1. Container de Boas-Vindas */}
      <section className="welcome-banner">
        <p>Olá,</p>
        <h1>{userStats.nome}! 👋</h1>
      </section>

      {/* 2. Cards de Estatísticas */}

      {/* 2. Cards de Estatísticas */}
      <section className="stats-grid">
        {/* Card 1 - Revisões Hoje */}
        <div className="stat-card card-revisoes">
          <div className="stat-icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#20adcd" strokeWidth="2.5">
              <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-title">Revisões Hoje</span>
            <h2 className="stat-value">{userStats.revisoesHoje}</h2>
            <span className="stat-subtitle">Flashcards disponíveis</span>
          </div>
        </div>

        {/* Card 2 - Progresso */}
        <div className="stat-card card-progresso">
          <div className="stat-icon-circle gray-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-title">Progresso</span>
            <h2 className="stat-value">{userStats.disciplinasConcluidas}/{userStats.totalDisciplinas}</h2>
            <span className="stat-subtitle">Disciplinas Concluídas</span>
          </div>
        </div>
      </section>

      {/* 3. Container de Revisão Rápida (Reutilizando FlashcardViewer) */}
      <section className="revisao-rapida-container">
        <div className="section-header-dash">
          <div className="title-with-icon">
            <div className="icon-box-cyan">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#20adcd" strokeWidth="3">
                 <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
               </svg>
            </div>
            <h3>Revisão Rápida!</h3>
          </div>
        </div>
        
        <div className="dash-flashcard-wrapper">
          <FlashcardViewer 
            pergunta={revisaoRapida.pergunta}
            resposta={revisaoRapida.resposta}
            dificuldade={revisaoRapida.dificuldade}
            cartaoAtual={1}
            totalCartoes={1}
            onAvaliar={(nivel) => console.log("Avaliação no Dash:", nivel)}
          />
        </div>
      </section>

      {/* 4. Container de Questionários (Reutilizando CardDisciplinaQuestionario) */}
      <section className="questionarios-dash-section">
        <div className="section-header-dash">
          <div className="title-with-icon">
            <div className="icon-box-purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6c1199" strokeWidth="2.5">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h3 className="m-0">Questionários</h3>
              <p className="subtitle-small">Teste seus conhecimentos</p>
            </div>
          </div>
          <Link to="/questionarios" className="ver-todos-link">Ver todos! <span className="arrow">→</span></Link>
        </div>

        <div className="questionarios-grid-dash">
          {questionariosSugeridos.map(q => (
            <CardDisciplinaQuestionario 
              key={q.id}
              nome={q.nome}
              descricao={q.descricao}
              onClick={() => navigate(`/questionarios`)}
            />
          ))}
        </div>
      </section>

    </div>
  );
}