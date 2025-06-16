import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import logo from "../assets/logo.svg";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Banco de Imagens" className="logo-img" />
        </Link>
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar imagens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
}