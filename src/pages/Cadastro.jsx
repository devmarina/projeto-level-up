// src/pages/Cadastro.jsx
import { Link } from "react-router-dom";
import BannerLateral from "../components/BannerLateral";
import "./Login.css"; // Reutilizamos o CSS de layout do Login

export default function Cadastro() {
  return (
    <div className="login-container">
      <BannerLateral />

      <div className="login-form-side">
        <h3>Crie sua conta</h3>
        <p>Comece sua jornada gamificada hoje mesmo</p>

        <form className="form">
          <label>Nome de Usuário</label>
          <input type="text" placeholder="Como quer ser chamado?" required />

          <label>E-mail</label>
          <input type="email" placeholder="Seu melhor e-mail" required />

          <label>Senha</label>
          <input type="password" placeholder="Crie uma senha forte" required />

          <button type="submit" className="btn-entrar">
            Cadastrar
          </button>
        </form>

        <p className="footer-text">
          Já possui uma conta? <Link to="/">Entre aqui</Link>
        </p>
      </div>
    </div>
  );
}
