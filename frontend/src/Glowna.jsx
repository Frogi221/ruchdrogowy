import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Glowna = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().substr(0, 10),
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    location: "",
    description: "",
    injuries: "",
    image: null,
  });
  const [addedData, setAddedData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAddedData(formData);
    setFormData({
      date: new Date().toISOString().substr(0, 10),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      location: "",
      description: "",
      image: null,
    });
  };

  const handleImageChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleLocation = () => {
    if (userLocation) {
      const { latitude, longitude } = userLocation;
      const apiKey = "ee0d24b485f54bf1ba02b51f21945de3";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&pretty=1`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const address = data.results[0].formatted;
          setFormData({ ...formData, location: address });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const apiKey = "ee0d24b485f54bf1ba02b51f21945de3";
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${apiKey}&pretty=1`;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            const address = data.results[0].formatted;
            setFormData({ ...formData, location: address });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="glowna-styl">
      <h1>Formularz dodawania zdarzenia drogowego</h1>
      <form className="glowna-form" onSubmit={handleSubmit}>
        <label>
          Data zdarzenia:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Godzina zdarzenia:
          <input
            type="time"
            name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
      />
    </label>
    <label>
      Lokalizacja zdarzenia:
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        onBlur={handleLocation}
        required
      />
      <button type="button" onClick={getLocation}>
        Ustaw moją lokalizację
      </button>
    </label>
    <label>
      Opis zdarzenia:
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
      />
    </label>
    <label>
      Zdjęcie:
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </label>
    <button type="submit">Dodaj zdarzenie</button>
  </form>
  {addedData && (
    <div>
      <h2>Dodano następujące zdarzenie:</h2>
      <p>Data: {addedData.date}</p>
      <p>Godzina: {addedData.time}</p>
      <p>Lokalizacja: {addedData.location}</p>
      <p>Opis: {addedData.description}</p>
      {addedData.image && (
        <img
          src={URL.createObjectURL(addedData.image)}
          alt="Zdjęcie zdarzenia"
        />
      )}
    </div>
  )}
</div>
);
};

export default Glowna;