const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Połączenie z bazą danych MariaDB
const connection = mysql.createConnection({
  host: "localhost",
  user: "Artur",
  password: "haslo123",
  database: "praca",
});

// Ustawienie parsera do obsługi danych JSON
app.use(express.json());

// Endpoint obsługujący żądanie zapisu danych
app.post("/api/events", (req, res) => {
  const { date, time, location, description, image } = req.body;

  // Zapytanie SQL do wstawienia danych
  const sql = "INSERT INTO events (date, time, location, description, image) VALUES (?, ?, ?, ?, ?)";

  // Wartości do wstawienia
  const values = [date, time, location, description, image];

  // Wykonanie zapytania SQL
  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Wystąpił błąd podczas zapisywania danych." });
    } else {
      res.status(200).json({ message: "Dane zostały zapisane." });
    }
  });
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Serwer backendowy uruchomiony na porcie ${port}.`);
});