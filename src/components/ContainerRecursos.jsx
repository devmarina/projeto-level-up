import { useState } from "react";
import TabMenu from "./TabMenu";
import CardRecurso from "./CardRecurso";
import "./ContainerRecursos.css";

export default function ContainerRecursos({ nomeUnidade, onClose }) {
  const [activeTab, setActiveTab] = useState("Flashcards");

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
            <CardRecurso
              tipo="flashcard"
              titulo="O que é uma lista encadeada?"
              subtitulo="Uma estrutura de dados linear onde cada elemento aponta para o próximo na sequência."
            />
            <CardRecurso
              tipo="flashcard"
              titulo="Diferença entre Array e Lista?"
              subtitulo="Arrays possuem tamanho fixo na memória, enquanto listas encadeadas podem crescer dinamicamente."
            />
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
