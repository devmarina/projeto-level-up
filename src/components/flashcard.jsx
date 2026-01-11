import React, { useState, useEffect } from 'react';
import './flashcard.css';

const Flashcard = ({
  pergunta,
  resposta,
  dificuldade = 'Fácil',
  cartaoAtual,
  totalCartoes,
  onAvaliar,
  onProximo,
  onAnterior
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reseta o card para frente quando a pergunta muda
  useEffect(() => {
    setIsFlipped(false);
  }, [pergunta, cartaoAtual]);

  // Define a classe CSS baseada na string de dificuldade
  const getDifficultyClass = (dif) => {
    const d = dif.toLowerCase();
    if (d === 'médio') return 'medio';
    if (d === 'difícil') return 'dificil';
    return 'facil';
  };

  const handleAvaliacao = (e, nivel) => {
    e.stopPropagation(); // Impede que o clique no botão vire o card
    if (onAvaliar) onAvaliar(nivel);
  };

  return (
    <div className="flashcard-wrapper">
      
      {/* Área do Card com efeito 3D */}
      <div 
        className="card-scene"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
          
          {/* --- FRENTE (Verde) --- */}
          <div className="card-face card-front">
            <span className={`badge ${getDifficultyClass(dificuldade)}`}>
              {dificuldade}
            </span>

            <h2 className="card-question">
              {pergunta}
            </h2>

            <div className="card-hint">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1 .12-8.83"></path>
              </svg>
              <span>Clique para virar</span>
            </div>
          </div>

          {/* --- VERSO (Roxo) --- */}
          <div className="card-face card-back">
            <span className="badge resposta-label">
              Resposta
            </span>

            <div className="card-answer-container">
               <p className="card-answer">{resposta}</p>
            </div>

            <div className="srs-grid">
              <button className="btn-srs btn-again" onClick={(e) => handleAvaliacao(e, 'again')}>Não lembrei</button>
              <button className="btn-srs btn-hard" onClick={(e) => handleAvaliacao(e, 'hard')}>Difícil</button>
              <button className="btn-srs btn-good" onClick={(e) => handleAvaliacao(e, 'good')}>Bom</button>
              <button className="btn-srs btn-easy" onClick={(e) => handleAvaliacao(e, 'easy')}>Fácil</button>
            </div>
          </div>

        </div>
      </div>

      {/* --- Navegação e Progresso --- */}
      <div className="controls-container">
        <button 
          className="btn-nav prev"
          onClick={onAnterior}
          disabled={cartaoAtual <= 1}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Anterior
        </button>

        <div className="progress-dots">
          {Array.from({ length: Math.min(totalCartoes, 5) }).map((_, index) => {
            // Lógica para mostrar as bolinhas corretamente mesmo se tiver muitos cards
            const isActive = index + 1 === cartaoAtual || (cartaoAtual > 5 && index === 4);
            return (
              <div 
                key={index} 
                className={`dot ${isActive ? 'active' : ''}`}
              />
            )
          })}
        </div>

        <button 
          className="btn-nav next"
          onClick={onProximo}
          disabled={cartaoAtual >= totalCartoes}
        >
          Próximo
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <p className="card-counter">
        Cartão {cartaoAtual} de {totalCartoes}
      </p>

    </div>
  );
};

export default Flashcard;