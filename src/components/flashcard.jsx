import React, { useState, useEffect } from 'react';
import { RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import './Flashcard.css'; // Importando o CSS criado acima

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
              <RefreshCw size={18} />
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
          <ChevronLeft size={18} />
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
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="card-counter">
        Cartão {cartaoAtual} de {totalCartoes}
      </p>

    </div>
  );
};

export default Flashcard;