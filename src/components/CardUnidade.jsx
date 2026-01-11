import "./CardUnidade.css";

export default function CardUnidade({
  numero,
  nome,
  descricao,
  concluida,
  onAcao,
}) {
  return (
    <div className={`unidade-card ${concluida ? "concluida" : ""}`}>
      <div className="unidade-info-left">
        <div className="status-icon-circle">
          {concluida ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <div className="circle-empty"></div>
          )}
        </div>

        <div className="unidade-textos">
          <div className="unidade-top-row">
            <span className="unidade-numero">{numero}</span>
            <h3 className="unidade-nome">{nome}</h3>
          </div>
          <p className="unidade-desc">{descricao}</p>
        </div>
      </div>

      <div className="unidade-acao-right">
        {concluida ? (
          <button className="btn-revisar" onClick={onAcao}>
            Revisar
          </button>
        ) : (
          <button className="btn-estudar" onClick={onAcao}>
            Estudar
          </button>
        )}
      </div>
    </div>
  );
}
