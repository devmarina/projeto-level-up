import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Badge from "../components/Badge";
import CardUnidade from "../components/CardUnidade";
import BackButton from "../components/BackButton";
import ContainerRecursos from "../components/ContainerRecursos";
import "./ConteudoDisciplinaEspecifica.css";

export default function ConteudoDisciplinaEspecifica() {
  const navigate = useNavigate();
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(null);

  const [unidades, setUnidades] = useState([
    {
      numero: "01",
      nome: "Arrays e Listas",
      descricao: "Conceitos fundamentais de arrays e listas encadeadas...",
      concluida: true,
      porcentagem: 100,
    },
    {
      numero: "02",
      nome: "Pilhas e Filas",
      descricao: "Estruturas LIFO e FIFO e suas aplicações...",
      concluida: true,
      porcentagem: 100,
    },
    {
      numero: "03",
      nome: "Árvores Binárias",
      descricao: "Estruturas hierárquicas e algoritmos de busca...",
      concluida: false,
      porcentagem: 0,
    },
    {
      numero: "04",
      nome: "Grafos",
      descricao: "Representação de conexões complexas e caminhos...",
      concluida: false,
      porcentagem: 0,
    },
  ]);

  const handleProgressUpdate = (pct, unidadeNome) => {
    setUnidades((prev) =>
      prev.map((u) =>
        u.nome === unidadeNome
          ? { ...u, porcentagem: pct, concluida: pct >= 100 }
          : u
      )
    );
  };

  const totalUnidades = unidades.length;
  const unidadesConcluidas = unidades.filter((u) => u.concluida).length;
  const progressoPct = Math.round(
    (unidadesConcluidas / Math.max(1, totalUnidades)) * 100
  );

  return (
    <div className="especifica-container">
      <BackButton
        text="Voltar para conteúdos"
        onClick={() => navigate("/conteudos")}
      />

      <section className="info-main-container">
        <div className="info-top-row">
          <div className="info-icon-square">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
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
          Estudo de estruturas de dados fundamentais e algoritmos.
        </p>

        <div className="info-progress-stats">
          <p>Progresso: {unidadesConcluidas}/{totalUnidades} unidades</p>
          <p className="pct-text">{progressoPct}%</p>
        </div>
        <ProgressBar porcentagem={progressoPct} />
      </section>

      <section className="unidades-white-box">
        <h2>Unidades</h2>
        <div className="unidades-list">
          {unidades.map((un) => (
            <CardUnidade
              key={un.numero}
              {...un}
              onAcao={() => setUnidadeSelecionada(un.nome)}
            />
          ))}
        </div>
      </section>

      <div className="recursos-grid">
        <div className="recurso-card" onClick={() => navigate("/flashcards")}>
          <div className="recurso-icon-box">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6c1199"
              strokeWidth="2"
            >
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

        <div
          className="recurso-card"
          onClick={() => navigate("/questionarios")}
        >
          <div className="recurso-icon-box">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6c1199"
              strokeWidth="2"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
          </div>
          <div className="recurso-info">
            <strong>Questionários</strong>
            <span>4 questionários disponíveis</span>
          </div>
        </div>
      </div>

      {unidadeSelecionada && (
        <ContainerRecursos
          nomeUnidade={unidadeSelecionada}
          onClose={() => setUnidadeSelecionada(null)}
          onProgressUpdate={handleProgressUpdate}
        />
      )}
    </div>
  );
}
