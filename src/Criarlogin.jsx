import React, { useState } from "react";
import "./Criarlogin.css";

export default function Criarlogin() {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de cadastro:", formData);

    setFormData({ login: "", email: "" });
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Login:
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
