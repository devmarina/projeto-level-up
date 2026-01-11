import "./CardDisciplina.css";
import ProgressBar from "./ProgressBar";

export default function CardDisciplina({ id, nome, descricao, unidadesConcluidas, totalUnidades, porcentagem, onClick }) {
  return (
    <div className="disciplina-card" onClick={onClick}>
      <div className="card-header-top">
        <div className="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
        <div className="card-badge-id">{id}</div>
      </div>

      <h3 className="card-title">{nome}</h3>
      <p className="card-description">{descricao}</p>

      <div className="card-progress-info">
        <span>{unidadesConcluidas}/{totalUnidades} unidades</span>
        <span>{porcentagem}%</span>
      </div>
      
      <ProgressBar porcentagem={porcentagem} />

      <div className="card-footer-link">
        <span>Ver conteúdo</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  );
}