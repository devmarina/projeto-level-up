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
      { id: 3, pergunta: "Qual operação insere no início de uma lista encadeada?", alternativas: ["push","append","prepend","unshift"], respostaCorreta: 2 },
      { id: 4, pergunta: "Em listas encadeadas, qual operação é geralmente O(1)?", alternativas: ["Acesso ao i-ésimo elemento","Inserção no início","Busca por valor","Remoção no meio"], respostaCorreta: 1 },
      { id: 5, pergunta: "Qual estrutura é mais eficiente para muitas inserções no meio da coleção?", alternativas: ["Array estático","Lista encadeada","Heap","Tabela hash"], respostaCorreta: 1 },
    ],
  },
  102: {
    disciplina: sampleDisciplinas[0],
    titulo: "Árvores e Grafos",
    questoes: [
      { id: 1, pergunta: "Qual travessia de árvore visita a raiz antes dos filhos?", alternativas: ["In-order","Pre-order","Post-order","Level-order"], respostaCorreta: 1 },
      { id: 2, pergunta: "Um grafo sem ciclos é chamado de:", alternativas: ["Composto","Árvore","DAG","Cíclico"], respostaCorreta: 2 },
      { id: 3, pergunta: "Qual algoritmo encontra o caminho mínimo em grafos com pesos não-negativos?", alternativas: ["Dijkstra","DFS","BFS","Kruskal"], respostaCorreta: 0 },
      { id: 4, pergunta: "Qual travessia visita nós por níveis?", alternativas: ["DFS","BFS","Pre-order","Post-order"], respostaCorreta: 1 },
    ],
  },
  103: {
    disciplina: sampleDisciplinas[0],
    titulo: "Algoritmos de Ordenação",
    questoes: [
      { id: 1, pergunta: "Qual algoritmo tem pior caso O(n^2)?", alternativas: ["Merge Sort","Quick Sort","Heap Sort","Bubble Sort"], respostaCorreta: 3 },
      { id: 2, pergunta: "Qual algoritmo é estável e usa divisão e conquista?", alternativas: ["Merge Sort","Quick Sort","Heap Sort","Selection Sort"], respostaCorreta: 0 },
      { id: 3, pergunta: "Qual algoritmo costuma ter média O(n log n)?", alternativas: ["Insertion Sort","Bubble Sort","Quick Sort","Selection Sort"], respostaCorreta: 2 },
    ],
  },
  201: {
    disciplina: sampleDisciplinas[1],
    titulo: "Modelagem Relacional",
    questoes: [
      { id: 1, pergunta: "O que é normalização?", alternativas: ["Otimizacao","Organizacao de tabelas","Indexacao","Backup"], respostaCorreta: 1 },
      { id: 2, pergunta: "O que é uma chave primária?", alternativas: ["Um atributo que identifica unicamente uma tupla","Um índice","Um relacionamento","Uma consulta"], respostaCorreta: 0 },
      { id: 3, pergunta: "O que é normalização 3NF (terceira forma normal)?", alternativas: ["Eliminar dependências transitivas","Separar tabelas por disciplina","Indexar colunas","Criar backups"], respostaCorreta: 0 },
    ],
  },
  202: {
    disciplina: sampleDisciplinas[1],
    titulo: "SQL Básico",
    questoes: [
      { id: 1, pergunta: "Qual comando recupera dados?", alternativas: ["INSERT","UPDATE","DELETE","SELECT"], respostaCorreta: 3 },
      { id: 2, pergunta: "Como você filtra linhas em uma consulta SQL?", alternativas: ["WHERE","HAVING","GROUP BY","ORDER BY"], respostaCorreta: 0 },
      { id: 3, pergunta: "Qual cláusula agrupa resultados por coluna?", alternativas: ["ORDER BY","GROUP BY","HAVING","JOIN"], respostaCorreta: 1 },
    ],
  },
  203: {
    disciplina: sampleDisciplinas[1],
    titulo: "Índices e Performance",
    questoes: [
      { id: 1, pergunta: "Qual a principal função de um índice em banco de dados?", alternativas: ["Aumentar espaço em disco","Melhorar velocidade de consultas","Substituir backups","Garantir integridade referencial"], respostaCorreta: 1 },
      { id: 2, pergunta: "Qual tipo de índice é comumente baseado em B-tree?", alternativas: ["Hash","B-tree","Bitmap","Full-text"], respostaCorreta: 1 },
      { id: 3, pergunta: "O que pode piorar performance mesmo com índices?", alternativas: ["Consultas simples","Filtros por índice","Joins sem condição","Atualizações massivas sem manutenção"], respostaCorreta: 3 },
    ],
  },
  301: {
    disciplina: sampleDisciplinas[2],
    titulo: "Classes e Objetos",
    questoes: [
      { id: 1, pergunta: "Qual palavra-chave cria uma instância em JS?", alternativas: ["new","create","inst","make"], respostaCorreta: 0 },
      { id: 2, pergunta: "Qual método é executado ao instanciar uma classe?", alternativas: ["constructor","init","start","create"], respostaCorreta: 0 },
      { id: 3, pergunta: "Qual palavra-chave define uma classe em JS (ES6)?", alternativas: ["class","struct","type","object"], respostaCorreta: 0 },
    ],
  },
  302: {
    disciplina: sampleDisciplinas[2],
    titulo: "Herança e Polimorfismo",
    questoes: [
      { id: 1, pergunta: "Herança permite:", alternativas: ["Reutilizar código","Aumentar o tamanho do binário","Garantir segurança","Evitar testes"], respostaCorreta: 0 },
      { id: 2, pergunta: "Polimorfismo permite:", alternativas: ["Mudar assinatura de métodos","Usar a mesma interface para diferentes tipos","Quebrar encapsulamento","Evitar testes unitários"], respostaCorreta: 1 },
      { id: 3, pergunta: "Como chamamos sobrescrita de método em POO?", alternativas: ["Overloading","Overriding","Encapsulamento","Abstração"], respostaCorreta: 1 },
    ],
  },
  303: {
    disciplina: sampleDisciplinas[2],
    titulo: "Design Patterns",
    questoes: [
      { id: 1, pergunta: "Qual pattern garante uma única instância de uma classe?", alternativas: ["Factory","Observer","Singleton","Decorator"], respostaCorreta: 2 },
      { id: 2, pergunta: "Qual pattern é usado para criar objetos sem expor lógica de instanciação?", alternativas: ["Singleton","Factory","Adapter","Observer"], respostaCorreta: 1 },
      { id: 3, pergunta: "Qual pattern permite trocar a implementação em tempo de execução?", alternativas: ["Strategy","Singleton","Builder","Decorator"], respostaCorreta: 0 },
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
  const [answeredCount, setAnsweredCount] = useState(0);

  const totalQuestions = quizData.questoes.length;
  const currentQuestion = quizData.questoes[currentQuestionIndex];

  const progressPercentage =
    totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const handleConfirm = () => {
    if (selectedOption === currentQuestion.respostaCorreta) {
      setScore((prev) => prev + 1);
    }

    setAnsweredCount((prev) => prev + 1);

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
    setAnsweredCount(0);
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
