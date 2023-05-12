import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/glowna");
  };

  return (
    <div className="auth-form-container">
      <h2>Logowanie</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="twojmail@twojapoczta.pl"
          id="email"
          name="email"
        />
        <label htmlFor="password">Hasło</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Zaloguj się</button>
      </form>
      <button
        className="link-btn"
        onClick={() => navigate("/register")}
      >
        Nie masz konta? Zajerestruj się tutaj.
      </button>
      <button
        className="link-btn"
        onClick={() => navigate("/haslo")}
      >
        Zapomniałeś hasła? Kliknij tutaj!
      </button>
    </div>
  );
};

