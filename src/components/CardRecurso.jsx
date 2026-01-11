// src/components/CardRecurso.jsx
import { useState } from "react";
import "./CardRecurso.css";

export default function CardRecurso({ tipo, titulo, subtitulo, onClick }) {
  const [checado, setChecado] = useState(false);

  const handleCheck = (e) => {
    e.stopPropagation(); // Impede que abra o recurso ao marcar como lido
    setChecado(!checado);
  };

  return (
    <div className={`card-recurso-item ${tipo}`} onClick={onClick}>
      <div className="recurso-left">
        {tipo !== "flashcard" && (
          <div className={`recurso-icon-bg icon-${tipo}`}>
            {/* Espaço reservado para o ícone SVG conforme o tipo */}
            <div className="icon-placeholder"></div>
          </div>
        )}
        <div className="recurso-info">
          <strong className="recurso-titulo">{titulo}</strong>
          <span className="recurso-subtitulo">{subtitulo}</span>
        </div>
      </div>
      
      <div className="recurso-right">
        {tipo === "flashcard" ? (
          <div 
            className={`check-circle-clickable ${checado ? "is-checked" : ""}`}
            onClick={handleCheck}
          >
            {checado && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}
      </div>
    </div>
  );
}