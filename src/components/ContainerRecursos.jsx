import { useState, useEffect } from "react";
import TabMenu from "./TabMenu";
import CardRecurso from "./CardRecurso";
import "./ContainerRecursos.css";

export default function ContainerRecursos({ nomeUnidade, onClose, onProgressUpdate }) {
  const [activeTab, setActiveTab] = useState("Flashcards");

  const initialFlashcards = [
    {
      id: 1,
      titulo: "O que é uma lista encadeada?",
      subtitulo:
        "Uma estrutura de dados linear onde cada elemento aponta para o próximo na sequência.",
    },
    {
      id: 2,
      titulo: "Diferença entre Array e Lista?",
      subtitulo:
        "Arrays possuem tamanho fixo na memória, enquanto listas encadeadas podem crescer dinamicamente.",
    },
  ];

  const [flashcardsChecked, setFlashcardsChecked] = useState(() => {
    const map = {};
    initialFlashcards.forEach((f) => (map[f.id] = false));
    return map;
  });

  useEffect(() => {
    notifyProgress();
  }, []);

  const toggleFlashcard = (id, value) => {
    setFlashcardsChecked((prev) => {
      const next = { ...prev, [id]: value };
      const total = Object.keys(next).length;
      const checkedCount = Object.values(next).filter(Boolean).length;
      const pct = total > 0 ? Math.round((checkedCount / total) * 100) : 0;
      if (onProgressUpdate) onProgressUpdate(pct, nomeUnidade);
      return next;
    });
  };

  const notifyProgress = () => {
    const total = Object.keys(flashcardsChecked).length;
    const checkedCount = Object.values(flashcardsChecked).filter(Boolean).length;
    const pct = total > 0 ? Math.round((checkedCount / total) * 100) : 0;
    if (onProgressUpdate) onProgressUpdate(pct, nomeUnidade);
  };

  return (
    <div className="container-recursos-fixed">
      <div className="recursos-header">
        <h2>Recursos: {nomeUnidade}</h2>
        <button className="btn-fechar-simple" onClick={onClose}>
          Fechar
        </button>
      </div>

      <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="recursos-scroll-area">
        {activeTab === "Flashcards" && (
          <div className="recursos-list-inner">
            {initialFlashcards.map((f) => (
              <CardRecurso
                key={f.id}
                tipo="flashcard"
                titulo={f.titulo}
                subtitulo={f.subtitulo}
                checked={!!flashcardsChecked[f.id]}
                onToggle={(val) => toggleFlashcard(f.id, val)}
              />
            ))}
          </div>
        )}

        {activeTab === "Playlists" && (
          <div className="recursos-list-inner">
            <CardRecurso
              tipo="playlist"
              titulo="Arrays em C - Curso Completo"
              subtitulo="YouTube - 45 min"
            />
            <CardRecurso
              tipo="playlist"
              titulo="Estruturas de Dados Fundamentais"
              subtitulo="YouTube - 1h 20min"
            />
          </div>
        )}

        {activeTab === "Slides" && (
          <div className="recursos-list-inner">
            <CardRecurso
              tipo="slide"
              titulo="Aula 01 - Introdução a Arrays"
              subtitulo="PDF - 12 Slides"
            />
            <CardRecurso
              tipo="slide"
              titulo="Aula 02 - Listas Dinâmicas"
              subtitulo="PPTX - 25 Slides"
            />
          </div>
        )}

        {activeTab === "Livros" && (
          <div className="recursos-list-inner">
            <CardRecurso
              tipo="livro"
              titulo="Estrutura de Dados em C"
              subtitulo="Autor: André Backes"
            />
            <CardRecurso
              tipo="livro"
              titulo="Algoritmos: Teoria e Prática"
              subtitulo="Autor: Thomas H. Cormen"
            />
          </div>
        )}
      </div>

      <div className="recursos-footer-fixed">
        <a href="#" className="ver-todos-link">
          Ver todos os {activeTab.toLowerCase()} <span>›</span>
        </a>
      </div>
    </div>
  );
}
