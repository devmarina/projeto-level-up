import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const user = { nome: "Gabriel" };

  const handleLogout = () => {
  
    navigate("/");
  };

  return (
    <header className="main-header">
      <div className="logo-section">
        <h1 className="logo-text">LEVEL UP</h1>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/conteudos">Conteúdos</NavLink>
          </li>
          <li>
            <NavLink to="/flashcards">Flashcards</NavLink>
          </li>
          <li>
            <NavLink to="/revisoes">Revisões</NavLink>
          </li>
          <li>
            <NavLink to="/questionarios">Questionários</NavLink>
          </li>
        </ul>
      </nav>

      <div className="user-area">
        <div className="user-profile">
          <div className="user-avatar-circle"></div>
          <h1 className="user-name">{user.nome}</h1>
        </div>

        <button className="exit-button" onClick={handleLogout} title="Sair">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
