import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Badge from "../components/Badge";
import ProgressBar from "../components/ProgressBar";
import ContainerQuestao from "../components/ContainerQuestao";
import Button from "../components/Button";
import "./QuestionarioAtivo.css";

// Dados mockados baseados no print
const quizData = {
  disciplina: "Estrutura de Dados",
  titulo: "Arrays e Listas",
  questoes: [
    {
      id: 1,
      pergunta: "Qual a complexidade de inserção no final de um array dinâmico (amortizada)?",
      alternativas: ["(O)1", "(O)n", "(O)log n", "(O)n²"],
      respostaCorreta: 0
    },
    {
      id: 2,
      pergunta: "Qual estrutura de dados utiliza o princípio LIFO?",
      alternativas: ["Fila", "Pilha", "Árvore", "Grafo"],
      respostaCorreta: 1
    },
    {
      id: 3,
      pergunta: "O acesso a um elemento por índice em um Array é:",
      alternativas: ["Lento", "Sequencial", "Imediato (O)1", "Depende do tamanho"],
      respostaCorreta: 2
    }
  ]
};

export default function QuestionarioAtivo() {
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = quizData.questoes.length;
  const currentQuestion = quizData.questoes[currentQuestionIndex];
  
  // Barra de progresso baseada na questão atual
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleConfirm = () => {
    // Contabiliza acerto
    if (selectedOption === currentQuestion.respostaCorreta) {
      setScore(prev => prev + 1);
    }

    // Avança ou finaliza
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="questionario-ativo-page">
      {/* Botão de Voltar (Sempre visível no topo, fora dos cards) */}
      <div style={{ alignSelf: 'flex-start' }}>
        <BackButton 
            text="Voltar para questionários" 
            onClick={() => navigate("/questionarios")} 
        />
      </div>

      {!isFinished ? (
        <>
          {/* Card do Cabeçalho (Disciplina e Progresso) */}
          <div className="quiz-header-card">
            <div className="quiz-badge-wrapper">
                {/* Badge cinza conforme print */}
                <Badge text={quizData.disciplina} color="#e0e0e0" variant="filled" />
            </div>
            
            <h2 className="quiz-title">{quizData.titulo}</h2>
            
            <span className="quiz-progress-info">
              Questão {currentQuestionIndex + 1} de {totalQuestions}
            </span>
            
            <ProgressBar porcentagem={progressPercentage} cor="#6c1199" />
          </div>

          {/* Card da Questão */}
          <ContainerQuestao 
            pergunta={currentQuestion.pergunta}
            alternativas={currentQuestion.alternativas}
            selecionada={selectedOption}
            onSelect={setSelectedOption}
            onConfirm={handleConfirm}
          />
        </>
      ) : (
        /* Tela de Resultado */
        <div className="resultado-wrapper">
          <div className="resultado-card">
            <h2 className="resultado-titulo">Questionário Concluído!</h2>
            <p>Você acertou <strong>{score}</strong> de <strong>{totalQuestions}</strong> questões.</p>
            
            <div className="resultado-acoes">
              <Button variant="secondary" onClick={() => navigate("/questionarios")}>
                Lista de Questionários
              </Button>
              <Button variant="primary" onClick={handleRestart}>
                Refazer
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}