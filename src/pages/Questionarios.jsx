import { useNavigate } from "react-router-dom";
import CardDisciplinaQuestionario from "../components/CardDisciplinaQuestionario";
import "./Questionarios.css";

const sampleDisciplinas = [
  "Algoritmos e Estruturas",
  "Banco de Dados",
  "Programação Orientada a Objetos",
  "Redes de Computadores",
  "Engenharia de Software",
];

const sampleDescricoes = [
  "Teste seus conhecimentos sobre estruturas lineares básicas.",
  "Conceitos essenciais de modelagem relacional e SQL.",
  "Padrões OO, encapsulamento e herança.",
  "Protocolos, camadas e modelos de rede.",
  "Boas práticas e ciclo de vida de software.",
];

const disciplinas = sampleDisciplinas.slice(0, 3).map((nome, i) => ({
  id: i + 1,
  nome,
  descricao: sampleDescricoes[i % sampleDescricoes.length],
}));

export default function Questionarios() {
  const navigate = useNavigate();

  return (
    <div className="questionarios-container">
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
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>
        <div>
          <h1 className="section-title">Questionários</h1>
          <p className="section-subtitle">
            {disciplinas.length} questionários disponíveis
          </p>
        </div>
      </div>

      <div className="cards-grid">
        {disciplinas.map((item) => (
          <CardDisciplinaQuestionario
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            onClick={() => navigate(`/questionarios/detalhes/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
