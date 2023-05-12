import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    navigate("/"); // przekierowanie do strony logowania

  };

  const handleFormSwitch = () => {
    navigate("/login");
  };

  return (
    <div className="auth-form-container">
      <h2>Rejestracja</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Login:</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Login"
        />
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
        <button type="submit">Zarejestruj się</button>
      </form>
      <Link to="/" className="link-btn">
        Masz konto? Zaloguj się tutaj.
      </Link>
    </div>
  );
};