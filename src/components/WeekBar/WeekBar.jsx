import React, { useState } from "react";
import Moment from "moment";
import { imageLoader } from "../../helpers/imageLoader";
import "./WeekBar.scss";

const WeekBar = ({ week }) => {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div className="weather-week">
      {week.map((item, index) => {
          return (
            <div
              key={item.dt}
              onClick={() => setItemIndex(index)}
              className={`${
                index === itemIndex
                  ? "weather-week__item active"
                  : "weather-week__item inactive"
              }`}
            >
              <div className="week-item__day">
                {Moment(item.dt_txt).format("dddd")}
              </div>
              <img src={imageLoader(item.weather[0].icon)} alt="weather icon" />
              <span className="week-item__degree">
                {Math.round(item.main.temp)}℃
              </span>
              <span>{item.weather[0].main}</span>
            </div>
          );
        })}
    </div>
  );
};

export default WeekBar;
