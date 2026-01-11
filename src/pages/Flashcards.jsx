import { useState } from "react";
import Flashcard from "../components/FlashcardViewer";
import "./Flashcards.css";

const flashcardsData = [
  {
    id: 1,
    pergunta: "O que é uma lista encadeada?",
    resposta: "Uma lista encadeada é uma estrutura de dados linear onde cada elemento (nó) contém um valor e uma referência (link) para o próximo nó.",
    dificuldade: "Fácil",
  },
  {
    id: 2,
    pergunta: "Qual é a diferença entre pilha e fila?",
    resposta: "Pilha usa LIFO (Last In, First Out) - último a entrar é o primeiro a sair. Fila usa FIFO (First In, First Out) - primeiro a entrar é o primeiro a sair.",
    dificuldade: "Fácil",
  },
  {
    id: 3,
    pergunta: "O que é uma árvore binária?",
    resposta: "Uma árvore binária é uma estrutura hierárquica onde cada nó tem no máximo dois filhos, chamados de filho esquerdo e filho direito.",
    dificuldade: "Médio",
  },
  {
    id: 4,
    pergunta: "Como funciona a complexidade de tempo em algoritmos?",
    resposta: "A complexidade de tempo mede quantas operações um algoritmo executa em relação ao tamanho da entrada, representada através da notação Big O.",
    dificuldade: "Médio",
  },
  {
    id: 5,
    pergunta: "O que é hash e para que serve?",
    resposta: "Hash é uma função que mapeia dados de tamanho variável para um valor de tamanho fixo. Serve para busca rápida, verificação de integridade e criptografia.",
    dificuldade: "Difícil",
  },
];

const disciplinasDispoveis = [
  "Todas as disciplinas",
  "Estruturas de Dados",
  "Algoritmos",
  "Programação",
];

export default function Flashcards() {
  const [cartaoAtual, setCartaoAtual] = useState(1);
  const [disciplinaFiltro, setDisciplinaFiltro] = useState("Todas as disciplinas");
  const [avaliacoes, setAvaliacoes] = useState({});

  const contadores = {
    total: flashcardsData.length,
    faceis: flashcardsData.filter(c => c.dificuldade === "Fácil").length,
    medios: flashcardsData.filter(c => c.dificuldade === "Médio").length,
    dificeis: flashcardsData.filter(c => c.dificuldade === "Difícil").length,
  };

  const cartaoCorrente = flashcardsData[cartaoAtual - 1];

  const handleProximo = () => {
    if (cartaoAtual < flashcardsData.length) {
      setCartaoAtual(cartaoAtual + 1);
    }
  };

  const handleAnterior = () => {
    if (cartaoAtual > 1) {
      setCartaoAtual(cartaoAtual - 1);
    }
  };

  const handleAvaliar = (nivel) => {
    setAvaliacoes({
      ...avaliacoes,
      [cartaoAtual]: nivel,
    });
    handleProximo();
  };

  return (
    <div className="flashcards-container">
      <div className="section-header">
        <div className="header-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="9"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>
        <div>
          <h1 className="section-title">Flashcards</h1>
          <p className="section-subtitle">{flashcardsData.length} cartões disponíveis</p>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </div>
        <select
          className="filter-select"
          value={disciplinaFiltro}
          onChange={(e) => setDisciplinaFiltro(e.target.value)}
        >
          {disciplinasDispoveis.map((disciplina) => (
            <option key={disciplina} value={disciplina}>
              {disciplina}
            </option>
          ))}
        </select>
      </div>

      <div className="flashcard-content">
        <div className="flashcard-info">
          <span className="card-counter">
            Cartão {cartaoAtual} de {flashcardsData.length}
          </span>
        </div>

        <Flashcard
          pergunta={cartaoCorrente.pergunta}
          resposta={cartaoCorrente.resposta}
          dificuldade={cartaoCorrente.dificuldade}
          cartaoAtual={cartaoAtual}
          totalCartoes={flashcardsData.length}
          onAvaliar={handleAvaliar}
          onProximo={handleProximo}
          onAnterior={handleAnterior}
        />
      </div>

      <div className="statistics-grid">
        <div className="stat-card">
          <div className="stat-number">{contadores.total}</div>
          <div className="stat-label">Total de cartões</div>
        </div>
        <div className="stat-card">
          <div className="stat-number stat-facil">{contadores.faceis}</div>
          <div className="stat-label">Fáceis</div>
        </div>
        <div className="stat-card">
          <div className="stat-number stat-medio">{contadores.medios}</div>
          <div className="stat-label">Médios</div>
        </div>
        <div className="stat-card">
          <div className="stat-number stat-dificil">{contadores.dificeis}</div>
          <div className="stat-label">Difíceis</div>
        </div>
      </div>
    </div>
  );
}
