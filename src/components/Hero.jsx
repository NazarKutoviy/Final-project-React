import { useState } from "react";

export default function Hero({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    weekday: "long",
    year: "numeric",
  });

  return (
    <div className="hero">
      <h1 className="hero-title">Weather dashboard</h1>

      <div className="hero-box">
        <p className="hero-box-text">
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>

        <p className="hero-box-textData">{formattedDate}</p>
      </div>

      <form className="hero-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="hero-search-input"
        />

        <button className="hero-search-btn" type="submit">
          <img
            className="hero-search-img"
            src="/img/look.png"
            alt="search icon"
          />
        </button>
      </form>
    </div>
  );
}
