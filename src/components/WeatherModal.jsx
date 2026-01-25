export default function WeatherModal({ weather, onClose }) {
  if (!weather) return null;

  return (
    <div className="weather-modal-backdrop" onClick={onClose}>
      <div className="weather-modal" onClick={(e) => e.stopPropagation()}>
        <button className="weather-modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="weather-modal-grid">
          <div className="weather-modal-card">
            <p className="weather-modal-card-title">Feels like</p>
            <h2 className="weather-modal-card-total">
              {Math.round(weather.main.feels_like)}°C
            </h2>
            <img
              className="weather-modal-card-icon"
              src="/img/temperatura.png"
              alt="feels like"
            />
          </div>

          <div className="weather-modal-card">
            <p className="weather-modal-card-title">Min °C</p>
            <h2 className="weather-modal-card-total">
              {Math.round(weather.main.temp_min)}°C
            </h2>
            <p className="weather-modal-card-title">Max °C</p>
            <h2 className="weather-modal-card-total">
              {Math.round(weather.main.temp_max)}°C
            </h2>
          </div>

          <div className="weather-modal-card">
            <p className="weather-modal-card-title">Humidity</p>
            <h2 className="weather-modal-card-total">
              {weather.main.humidity}%
            </h2>
            <img src="/img/rain.png" alt="humidity" />
          </div>

          <div className="weather-modal-card">
            <p className="weather-modal-card-title">Pressure</p>
            <h2 className="weather-modal-card-total">
              {weather.main.pressure} Pa
            </h2>
            <img src="/img/compas.png" alt="pressure" />
          </div>

          <div className="weather-modal-card">
            <p className="weather-modal-card-title">Wind speed</p>
            <h2 className="weather-modal-card-total">
              {weather.wind.speed} m/s
            </h2>
            <img src="/img/wind.png" alt="wind" />
          </div>

          <div className="weather-modal-card">
            <p className="weather-modal-card-title">Visibility</p>
            <h2 className="weather-modal-card-total">
              {weather.visibility >= 10000
                ? "Unlimited"
                : `${weather.visibility} m`}
            </h2>
            <img src="/img/eye.png" alt="visibility" />
          </div>
        </div>
      </div>
    </div>
  );
}
