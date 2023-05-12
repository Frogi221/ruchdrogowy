import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Haslo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(email, password);
      navigate("/");
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Przypomnij hasło</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="twojmail@twojapoczta.pl"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Hasło</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          minLength="8"
          required
        />
        <label htmlFor="confirm-password">Potwierdź hasło</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="confirm-password"
          name="confirm-password"
          minLength="8"
          required
        />
        {!passwordsMatch && <p>Hasła nie są identyczne.</p>}
        <button type="submit">Zmień hasło</button>
      </form>
    </div>
  );
};