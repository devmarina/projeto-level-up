import { Link } from "react-router-dom";
import BannerLateral from "../components/BannerLateral";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <BannerLateral />

      <div className="login-form-side">
        <h3>Bem-vindo de volta!</h3>
        <p>Entre para continuar sua jornada de estudos</p>

        <form className="form">
          <label>E-mail</label>
          <input type="email" placeholder="Seu melhor e-mail" required />

          <label>Senha</label>
          <input type="password" placeholder="Sua senha" required />

          <button type="submit" className="btn-entrar">
            Entrar
          </button>
        </form>

        <p className="footer-text">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
