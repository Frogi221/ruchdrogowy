import React, { useState } from "react";
import "./kontakty.css";


export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:artur517518@gmail.com?subject=${name}&body=${message}`);
  };

  return (
    <div className="auth-form-container">
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Twoje imię:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Twój e-mail:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Twoja wiadomość:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Wyślij wiadomość</button>
      </form>
    </div>
  );
};

export default Contact;
