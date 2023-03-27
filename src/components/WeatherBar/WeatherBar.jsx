import React, { useState } from "react";
import "./WeatherBar.scss";

const WeatherBar = ({ weather }) => {
  const [degrees, setDegrees] = useState(Math.round(weather.main.temp));
  const [switchDegrees, setSwitchDegrees] = useState(true);

  const convertToCelsius = () => {
    const d = (degrees - 32) / 1.8;
    setDegrees(d);
    setSwitchDegrees(!switchDegrees);
  };

  const convertToFahrenheit = () => {
    const d = degrees * 1.8 + 32;
    setDegrees(d);
    setSwitchDegrees(!switchDegrees);
  };

  return (
    <section className="weather-box">
      <div className="weather-temp">
        <h2>{degrees}°</h2>
        <div className="weather-buttons">
          <button
            type="button"
            disabled={switchDegrees}
            onClick={convertToCelsius}
          >
            C
          </button>
          <button
            type="button"
            disabled={!switchDegrees}
            onClick={convertToFahrenheit}
          >
            F
          </button>
        </div>
      </div>
      <div className="weather-main">
        <div className="weather-description">
          <span>Feels like: {Math.round(weather.main.feels_like)}℃</span>
          <span>
            Max: {Math.round(weather.main.temp_max)}℃ Min:{" "}
            {Math.round(weather.main.temp_min)}℃
          </span>
        </div>
        <span>Wind: {Math.round(weather.wind.speed)}km/s</span>
        <span>Humidity: {weather.main.humidity}</span>
        <span>Pressure: {weather.main.pressure}</span>
        <span>Sea level: {weather.main.sea_level}</span>
        <span>Ground level : {weather.main.grnd_level}</span>
      </div>
    </section>
  );
};

export default WeatherBar;
