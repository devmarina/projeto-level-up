import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import CardDisciplinaQuestionario from "../components/CardDisciplinaQuestionario";
import "./QuestionariosDisciplinaEspecifico.css";

const sampleDisciplinas = [
  "Algoritmos e Estruturas",
  "Banco de Dados",
  "Programação Orientada a Objetos",
  "Redes de Computadores",
];

const contentsByDisciplina = {
  1: [
    { id: 101, titulo: "Introdução a Listas Encadeadas", descricao: "Conceitos, operações básicas e complexidade." },
    { id: 102, titulo: "Árvores e Grafos", descricao: "Representação, travessias e aplicações." },
    { id: 103, titulo: "Algoritmos de Ordenação", descricao: "Comparação de complexidade e implementações." },
  ],
  2: [
    { id: 201, titulo: "Modelagem Relacional", descricao: "Entidades, relacionamentos e normalização." },
    { id: 202, titulo: "SQL Básico", descricao: "Consultas SELECT, filtros e joins." },
    { id: 203, titulo: "Índices e Performance", descricao: "Como otimizar consultas com índices." },
  ],
  3: [
    { id: 301, titulo: "Classes e Objetos", descricao: "Instância, construtores e encapsulamento." },
    { id: 302, titulo: "Herança e Polimorfismo", descricao: "Reutilização e tipos derivados." },
    { id: 303, titulo: "Design Patterns", descricao: "Padrões comuns e quando usar." },
  ],
};

export default function QuestionariosDisciplinaEspecifico() {
  const navigate = useNavigate();

  const { disciplinaId } = useParams();
  const disciplinaIndex = Number(disciplinaId) - 1;
  const conteudos = contentsByDisciplina[Number(disciplinaId)] || [];
  const handleCardClick = (id) => {
    console.log(`Clicou no conteúdo ${id}`);
  };

  return (
    <div className="questionario-disciplina-container">
      <BackButton
        text="Voltar para questionários"
        onClick={() => navigate("/questionarios")}
      />

      <div className="disciplina-header">
        <div className="header-icon-box">
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
        <div className="disciplina-info">
          <h2>
            {(() => {
              const idx = disciplinaIndex;
              return sampleDisciplinas[idx] || `Disciplina ${disciplinaId}`;
            })()}
          </h2>
          <p>{conteudos.length} questionários disponíveis</p>
        </div>
      </div>

      <div className="conteudos-grid">
        {conteudos.map((item) => (
          <CardDisciplinaQuestionario
            key={item.id}
            nome={item.titulo}
            descricao={item.descricao}
            onClick={() => navigate(`/questionario-ativo/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
