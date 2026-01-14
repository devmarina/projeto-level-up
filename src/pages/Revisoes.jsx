import { useState } from "react";
import Flashcard from "../components/FlashcardViewer";
import ProgressBar from "../components/ProgressBar";
import "./Revisoes.css";

const revisoesData = [
  {
    id: 1,
    pergunta: "O que é uma lista encadeada?",
    resposta:
      "Uma lista encadeada é uma estrutura de dados linear onde cada elemento (nó) contém um valor e uma referência (link) para o próximo nó.",
    dificuldade: "Fácil",
    disciplina: "Estrutura de Dados",
    status: "para_revisar",
  },
  {
    id: 2,
    pergunta: "Qual é a diferença entre pilha e fila?",
    resposta:
      "Pilha usa LIFO (Last In, First Out) - último a entrar é o primeiro a sair. Fila usa FIFO (First In, First Out) - primeiro a entrar é o primeiro a sair.",
    dificuldade: "Fácil",
    disciplina: "Estrutura de Dados",
    status: "para_revisar",
  },
];

export default function Revisoes() {
  const [cartoes, setCartoes] = useState(revisoesData);
  const [cartaoAtual, setCartaoAtual] = useState(0);

  const cartoesParaRevisar = cartoes.filter((c) => c.status === "para_revisar");
  const totalRevisado = cartoes.filter((c) => c.status === "revisado").length;
  const totalCartoes = cartoes.length;
  const progresso = totalRevisado;

  const handleAvaliar = (nivel) => {
    if (cartaoAtual < cartoesParaRevisar.length) {
      const cartaoIndex = cartoes.findIndex(
        (c) => c.id === cartoesParaRevisar[cartaoAtual].id
      );

      if (nivel === "good" || nivel === "easy") {
        const novosCartoes = [...cartoes];
        novosCartoes[cartaoIndex].status = "revisado";
        setCartoes(novosCartoes);

        if (cartaoAtual < cartoes.length - 1) {
          setCartaoAtual(cartaoAtual);
        } else {
          setCartaoAtual(0);
        }
      } else {
        if (cartaoAtual < cartoes.length - 1) {
          setCartaoAtual(cartaoAtual + 1);
        } else {
          setCartaoAtual(0);
        }
      }
    }
  };

  const handleProximo = () => {
    if (cartaoAtual < cartoesParaRevisar.length - 1) {
      setCartaoAtual(cartaoAtual + 1);
    }
  };

  const handleAnterior = () => {
    if (cartaoAtual > 0) {
      setCartaoAtual(cartaoAtual - 1);
    }
  };

  return (
    <div className="revisoes-container">
      <div className="section-header">
        <div className="header-icon revisoes-icon">
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
            <path d="M1 4v6h6"></path>
            <path d="M23 20v-6h-6"></path>
            <path d="M20.49 9a9 9 0 1 0-2.12 9.36"></path>
          </svg>
        </div>
        <div>
          <h1 className="section-title">Revisões SRS</h1>
          <p className="section-subtitle">
            {cartoesParaRevisar.length} cartões para revisar hoje
          </p>
        </div>
      </div>

      {cartoesParaRevisar.length > 0 ? (
        <>
          <div className="progress-container">
            <div className="progress-header">
              <span className="progress-label">Progresso de revisões</span>
              <span className="progress-count">
                {progresso} de {totalCartoes}
              </span>
            </div>
            <div className="progress-bar-wrapper">
              <ProgressBar
                porcentagem={
                  totalCartoes > 0 ? Math.round((progresso / totalCartoes) * 100) : 0
                }
                cor="#7c3aed"
              />
            </div>
          </div>

          <div className="card-container-revisoes">
            <div className="card-discipline-tag">
              {cartoesParaRevisar[cartaoAtual]?.disciplina}
            </div>

            <Flashcard
              pergunta={cartoesParaRevisar[cartaoAtual]?.pergunta}
              resposta={cartoesParaRevisar[cartaoAtual]?.resposta}
              dificuldade={cartoesParaRevisar[cartaoAtual]?.dificuldade}
              cartaoAtual={cartaoAtual + 1}
              totalCartoes={cartoesParaRevisar.length}
              onAvaliar={handleAvaliar}
              onProximo={handleProximo}
              onAnterior={handleAnterior}
            />
          </div>
        </>
      ) : (
        <div className="empty-state">
          <h2 className="empty-state-title">
            Você tem {cartoesParaRevisar.length} cartões para revisar
          </h2>
          <p className="empty-state-subtitle">
            Volte mais tarde para continuar suas revisões!
          </p>
        </div>
      )}
    </div>
  );
}
