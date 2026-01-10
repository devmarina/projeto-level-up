// src/components/BannerLateral.jsx
import "./BannerLateral.css";

export default function BannerLateral() {
  return (
    <div className="banner-roxo">
      <div className="logo-box">
        <div className="icon-raio">⚡</div>
      </div>

      <h1 className="title-levelup">LEVEL UP</h1>
      <p className="subtitle">
        Transforme seus estudos em uma jornada gamificada de aprendizado
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>50+</h2>
          <p>flashcards</p>
        </div>
        <div className="stat-card">
          <h2>10+</h2>
          <p>questionários</p>
        </div>
        <div className="stat-card">
          <h2>4+</h2>
          <p>módulos</p>
        </div>
        <div className="stat-card">
          <h2>SRS</h2>
          <p>repetição espaçada</p>
        </div>
      </div>
    </div>
  );
}
