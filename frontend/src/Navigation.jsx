import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/lista">Lista zdarzeń</Link>
        </li>
        <li>
          <Link to="/logowanie">Logowanie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;