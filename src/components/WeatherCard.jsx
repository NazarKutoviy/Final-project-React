export default function WeatherCard({ weather, onReset, onDelete, onSeeMore }) {
  const localTime = new Date((weather.dt + weather.timezone) * 1000);

  const time = localTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = localTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="weather-card">
      <div className="place">
        <p className="weather-card__city">{weather.name}</p>
        <p className="weather-card__country">{weather.sys.country}</p>
      </div>
      <p className="weather-card__time">{time}</p>
      <button className="weather-card__btn">Hourly forecast</button>

      <p className="weather-card__date">{date}</p>
      <img
        className="weather-card__icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />  

      <p className="weather-card__temp">{Math.round(weather.main.temp)}°C</p>

      <div className="weather-card__box">
        <button className="reset" onClick={() => onReset(weather.id, weather.name)}>
          <img src="./img/reset.png" alt="reset" />
        </button>

        <button className="like">
          <img src="./img/like.png" alt="like" />
        </button>
        <button className="more" onClick={() => onSeeMore(weather)}>See more</button>
        <button className="delete" onClick={() => onDelete(weather.id)}>
          <img src="./img/delete.png" alt="delete" />
        </button>
      </div>
    </div>
  );
}
