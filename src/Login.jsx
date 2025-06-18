import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSnackbar } from "notistack";
import makeLogin from "./api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const make = await makeLogin(email, password);

    if (make.status >= 400) {
      return enqueueSnackbar({
        message: make?.data?.message,
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    }

    localStorage.setItem("isRegister", true);

    enqueueSnackbar({
      message: make?.data?.message,
      variant: "success",
      anchorOrigin: { horizontal: "center", vertical: "top" },
    });

    setTimeout(() => {
      navigate("../dashboard", { replace: true });
    }, 1200);
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Entrar na sua conta</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>
        </form>
        <p className="signup">
          Não tem conta? <Link to="/cadastro">Crie uma agora</Link>
        </p>
      </div>
    </div>
  );
}
