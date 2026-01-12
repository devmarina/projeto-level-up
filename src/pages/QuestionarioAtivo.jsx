import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Badge from "../components/Badge";
import ProgressBar from "../components/ProgressBar";
import ContainerQuestao from "../components/ContainerQuestao";
import Button from "../components/Button";
import "./QuestionarioAtivo.css";

const sampleDisciplinas = ["Algoritmos e Estruturas", "Banco de Dados", "Programação Orientada a Objetos", "Redes de Computadores"];

const quizzesByContent = {
  101: {
    disciplina: sampleDisciplinas[0],
    titulo: "Introdução a Listas Encadeadas",
    questoes: [
      { id: 1, pergunta: "Qual operação remove o primeiro elemento de uma lista encadeada?", alternativas: ["push","pop","shift","unshift"], respostaCorreta: 2 },
      { id: 2, pergunta: "Qual a complexidade média para acessar o i-ésimo elemento numa lista encadeada?", alternativas: ["O(1)","O(log n)","O(n)","O(n log n)"], respostaCorreta: 2 },
    ],
  },
  102: {
    disciplina: sampleDisciplinas[0],
    titulo: "Árvores e Grafos",
    questoes: [
      { id: 1, pergunta: "Qual travessia de árvore visita a raiz antes dos filhos?", alternativas: ["In-order","Pre-order","Post-order","Level-order"], respostaCorreta: 1 },
      { id: 2, pergunta: "Um grafo sem ciclos é chamado de:", alternativas: ["Composto","Árvore","DAG","Cíclico"], respostaCorreta: 2 },
    ],
  },
  103: {
    disciplina: sampleDisciplinas[0],
    titulo: "Algoritmos de Ordenação",
    questoes: [
      { id: 1, pergunta: "Qual algoritmo tem pior caso O(n^2)?", alternativas: ["Merge Sort","Quick Sort","Heap Sort","Bubble Sort"], respostaCorreta: 3 },
    ],
  },
  201: {
    disciplina: sampleDisciplinas[1],
    titulo: "Modelagem Relacional",
    questoes: [
      { id: 1, pergunta: "O que é normalização?", alternativas: ["Otimizacao","Organizacao de tabelas","Indexacao","Backup"], respostaCorreta: 1 },
    ],
  },
  202: {
    disciplina: sampleDisciplinas[1],
    titulo: "SQL Básico",
    questoes: [
      { id: 1, pergunta: "Qual comando recupera dados?", alternativas: ["INSERT","UPDATE","DELETE","SELECT"], respostaCorreta: 3 },
    ],
  },
  203: {
    disciplina: sampleDisciplinas[1],
    titulo: "Índices e Performance",
    questoes: [
      { id: 1, pergunta: "Qual a principal função de um índice em banco de dados?", alternativas: ["Aumentar espaço em disco","Melhorar velocidade de consultas","Substituir backups","Garantir integridade referencial"], respostaCorreta: 1 },
    ],
  },
  301: {
    disciplina: sampleDisciplinas[2],
    titulo: "Classes e Objetos",
    questoes: [
      { id: 1, pergunta: "Qual palavra-chave cria uma instância em JS?", alternativas: ["new","create","inst","make"], respostaCorreta: 0 },
    ],
  },
  302: {
    disciplina: sampleDisciplinas[2],
    titulo: "Herança e Polimorfismo",
    questoes: [
      { id: 1, pergunta: "Herança permite:", alternativas: ["Reutilizar código","Aumentar o tamanho do binário","Garantir segurança","Evitar testes"], respostaCorreta: 0 },
    ],
  },
  303: {
    disciplina: sampleDisciplinas[2],
    titulo: "Design Patterns",
    questoes: [
      { id: 1, pergunta: "Qual pattern garante uma única instância de uma classe?", alternativas: ["Factory","Observer","Singleton","Decorator"], respostaCorreta: 2 },
    ],
  },
};

export default function QuestionarioAtivo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const contentId = Number(id);

  const quizData = quizzesByContent[contentId] || {
    disciplina: "Questionários",
    titulo: `Questionário ${contentId}`,
    questoes: [],
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = quizData.questoes.length;
  const currentQuestion = quizData.questoes[currentQuestionIndex];

  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleConfirm = () => {
    if (selectedOption === currentQuestion.respostaCorreta) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
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
      <div style={{ alignSelf: "flex-start" }}>
        <BackButton
          text="Voltar para questionários"
          onClick={() => navigate("/questionarios")}
        />
      </div>

      {!isFinished ? (
        <>
          <div className="quiz-header-card">
            <div className="quiz-badge-wrapper">
              <Badge
                text={quizData.disciplina}
                color="#e0e0e0"
                variant="filled"
              />
            </div>

            <h2 className="quiz-title">{quizData.titulo}</h2>

            <span className="quiz-progress-info">
              Questão {currentQuestionIndex + 1} de {totalQuestions}
            </span>

            <ProgressBar porcentagem={progressPercentage} cor="#6c1199" />
          </div>

          <ContainerQuestao
            pergunta={currentQuestion.pergunta}
            alternativas={currentQuestion.alternativas}
            selecionada={selectedOption}
            onSelect={setSelectedOption}
            onConfirm={handleConfirm}
          />
        </>
      ) : (
        <div className="resultado-wrapper">
          <div className="resultado-card">
            <h2 className="resultado-titulo">Questionário Concluído!</h2>
            <p>
              Você acertou <strong>{score}</strong> de{" "}
              <strong>{totalQuestions}</strong> questões.
            </p>

            <div className="resultado-acoes">
              <Button
                variant="secondary"
                onClick={() => navigate("/questionarios")}
              >
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
