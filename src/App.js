import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WeatherCard from "./components/WeatherCard";
import Modal from "./components/Modal";
import WeatherModal from "./components/WeatherModal";
import NewsModule from "./components/NewsModule";
import Swiper from "./components/Swiper";
import Footer from "./components/Footer";
import "./index.css";


const API_KEY = "7e715b15a17afed702f4b43d4a4f5a98";

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleSignUp = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const [cards, setCards] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards"));
    if (savedCards) setCards(savedCards);
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleSearch = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (data.cod !== 200) return;

      setCards((prev) => {
        const updated = [data, ...prev];
        return updated.slice(0, 3);
      });
    } catch (error) {
      console.error("Weather fetch error:", error);
    }
  };

  const handleReset = async (id, city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await res.json();

    setCards((prev) => prev.map((card) => (card.id === id ? data : card)));
  };

  const handleDelete = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <>
      <Header
        user={user}
        openModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
      />
      {isAuthModalOpen && (
        <Modal
          closeModal={() => setIsAuthModalOpen(false)}
          onSignUp={handleSignUp}
        />
      )}
      <Hero onSearch={handleSearch} />
      <div className="weather-list">
        {cards.map((weather) => (
          <WeatherCard
            key={weather.id}
            weather={weather}
            onReset={handleReset}
            onDelete={handleDelete}
            onSeeMore={setSelectedWeather}
          />
        ))}
      </div>
      {selectedWeather && (
        <WeatherModal
          weather={selectedWeather}
          onClose={() => setSelectedWeather(null)}
        />
      )}
      <NewsModule />
      <Swiper />
      <Footer />
    </>
  );
}
