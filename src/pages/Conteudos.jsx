import { useNavigate } from "react-router-dom";
import CardDisciplina from "../components/CardDisciplina";
import SearchInput from "../components/SearchInput";
import "./Questionarios.css"; 

const disciplinas = [
  {
    id: "ED-01",
    nome: "Estrutura de Dados",
    descricao: "Estudo de estruturas de dados fundamentais e algoritmos básicos.",
    unidadesConcluidas: 2,
    totalUnidades: 4,
    porcentagem: 50,
  },
  {
    id: "BD-02",
    nome: "Banco de Dados",
    descricao: "Modelagem relacional, linguagem SQL e otimização de consultas.",
    unidadesConcluidas: 1,
    totalUnidades: 4,
    porcentagem: 25,
  }
];

export default function Conteudos() {
  const navigate = useNavigate(); 

  return (
    <div className="questionarios-container">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="header-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div>
            <h1 className="section-title">Conteúdos</h1>
            <p className="section-subtitle">Explore os materiais de estudo por disciplina</p>
          </div>
        </div>

        <SearchInput placeholder="Buscar disciplina..." />
      </div>

      <div className="cards-grid">
        {disciplinas.map((item) => (
          <CardDisciplina 
            key={item.id} 
            {...item}
            onClick={() => navigate("/conteudos/detalhes")} 
          />
        ))}
      </div>
    </div>
  );
}