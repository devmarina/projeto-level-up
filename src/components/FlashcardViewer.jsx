import React, { useState, useEffect } from "react";
import "./FlashcardViewer.css";

const Flashcard = ({
  pergunta,
  resposta,
  dificuldade = "Fácil",
  cartaoAtual,
  totalCartoes,
  onAvaliar,
  onProximo,
  onAnterior,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    setIsFlipped(false);
  }, [pergunta, cartaoAtual]);

  const getDifficultyClass = (dif) => {
    const d = dif.toLowerCase();
    if (d === "médio") return "medio";
    if (d === "difícil") return "dificil";
    return "facil";
  };

  const handleSelectLevel = (e, nivel) => {
    e.stopPropagation();
    setSelectedLevel(nivel);
  };

  const handleConfirmMark = (e) => {
    e.stopPropagation();
    if (!selectedLevel) return;
    if (onAvaliar) onAvaliar(selectedLevel);
    setSelectedLevel(null);
  };

  return (
    <div className="flashcard-outer-container">
      <div className="flashcard-wrapper">
        <div className="card-scene" onClick={() => setIsFlipped(!isFlipped)}>
          <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
            <div className="card-face card-front">
              <span className={`badge ${getDifficultyClass(dificuldade)}`}>
                {dificuldade}
              </span>

              <h2 className="card-question">{pergunta}</h2>

              <div className="card-hint">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <path d="M20.49 15a9 9 0 1 1 .12-8.83"></path>
                </svg>
                <span>Clique para virar</span>
              </div>
            </div>

            <div className="card-face card-back">
              <span className="badge resposta-label">Resposta</span>

              <div className="card-answer-container">
                <p className="card-answer">{resposta}</p>
              </div>

              <div className="srs-grid">
                <button
                  className={`btn-srs btn-again ${selectedLevel === 'again' ? 'selected' : ''}`}
                  onClick={(e) => handleSelectLevel(e, "again")}
                  aria-pressed={selectedLevel === 'again'}
                >
                  Não lembrei
                </button>
                <button
                  className={`btn-srs btn-hard ${selectedLevel === 'hard' ? 'selected' : ''}`}
                  onClick={(e) => handleSelectLevel(e, "hard")}
                  aria-pressed={selectedLevel === 'hard'}
                >
                  Difícil
                </button>
                <button
                  className={`btn-srs btn-good ${selectedLevel === 'good' ? 'selected' : ''}`}
                  onClick={(e) => handleSelectLevel(e, "good")}
                  aria-pressed={selectedLevel === 'good'}
                >
                  Bom
                </button>
                <button
                  className={`btn-srs btn-easy ${selectedLevel === 'easy' ? 'selected' : ''}`}
                  onClick={(e) => handleSelectLevel(e, "easy")}
                  aria-pressed={selectedLevel === 'easy'}
                >
                  Fácil
                </button>
              </div>

              <div style={{ marginTop: 12 }}>
                <button
                  className="btn-srs btn-mark"
                  onClick={handleConfirmMark}
                  disabled={!selectedLevel}
                >
                  Marcar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="controls-container">
          <button
            className="btn-nav prev"
            onClick={onAnterior}
            disabled={cartaoAtual <= 1}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Anterior
          </button>

          <div className="progress-dots">
            {Array.from({ length: Math.min(totalCartoes, 5) }).map(
              (_, index) => {
                const isActive =
                  index + 1 === cartaoAtual || (cartaoAtual > 5 && index === 4);
                return (
                  <div
                    key={index}
                    className={`dot ${isActive ? "active" : ""}`}
                  />
                );
              }
            )}
          </div>

          <button
            className="btn-nav next"
            onClick={onProximo}
            disabled={cartaoAtual >= totalCartoes}
          >
            Próximo
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <p className="card-counter">
          Cartão {cartaoAtual} de {totalCartoes}
        </p>
      </div>
    </div>
  );
};

export default Flashcard; //juan juan, nao ta com o nome certo
