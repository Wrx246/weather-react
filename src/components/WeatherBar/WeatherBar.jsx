import React from "react";
import { FiWind } from "react-icons/fi";
import { imageLoader } from "../../helpers/imageLoader";
import './WeatherBar.scss';

const WeatherBar = ({weather}) => {
  return (
    <div className="weather-box">
      <div className="weather-main">
        <div className="weather-main__cloud">
          {/* {(weather.weather[0].description) !== 'clear sky' ?
                  <AiFillCloud size={50} /> : <BsFillSunFill size={50} />} */}
          <img src={imageLoader(weather.weather[0].icon)} alt="weather icon" />
          <span>{weather.weather[0].description}</span>
        </div>
        <div className="weather-main__wind">
          <FiWind size={50} />
          <span>{Math.round(weather.wind.speed)}km/s</span>
        </div>
        <span className="weather-main__temp">
          {Math.round(weather.main.temp)}℃
        </span>
      </div>
      <div className="weather-description">
        <span>Feels like: {Math.round(weather.main.feels_like)}℃</span>
        <span>
          Max: {Math.round(weather.main.temp_max)}℃ Min:{" "}
          {Math.round(weather.main.temp_min)}℃
        </span>
      </div>
    </div>
  );
};

export default WeatherBar;
