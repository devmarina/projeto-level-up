import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerLateral from "../components/BannerLateral";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/autenticar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: username, password }),
      });

      const data = await res.json();

      if (res.ok && data.usuario) {
        console.log('✅ Login bem-sucedido:', data);
        if (data.usuario) localStorage.setItem("usuario", JSON.stringify(data.usuario));
        navigate("/dashboard");
        return;
      }

      setError(data.error || data.message || "Falha ao autenticar");
    } catch (err) {
      setError("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="login-container">
      <BannerLateral />

      <div className="login-form-side">
        <h3>Bem-vindo de volta!</h3>
        <p>Entre para continuar sua jornada de estudos</p>

        <form className="form" onSubmit={handleLogin}>
          <label>E-mail / Usuário</label>
          <input
            type="text"
            placeholder="Seu melhor e-mail ou username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="login-error" style={{ color: "#d33" }}>{error}</p>}

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
