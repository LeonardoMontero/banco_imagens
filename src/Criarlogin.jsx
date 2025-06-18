import React, { useState } from "react";
import "./Criarlogin.css";
import { useSnackbar } from "notistack";
import { createUser } from "./api";
import { useNavigate } from "react-router-dom";

export default function Criarlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();

    const make = await createUser(email, password);

    if (make.status >= 400) {
      return enqueueSnackbar({
        message: make?.data?.message,
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    }

    enqueueSnackbar({
      message: make?.data?.message,
      variant: "success",
      anchorOrigin: { horizontal: "center", vertical: "top" },
    });

    setTimeout(() => {
      navigate("../login");
    }, 1000);
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input
            type="text"
            name="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
