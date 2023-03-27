import React from "react";
import Moment from 'moment';
import { imageLoader } from "../../helpers/imageLoader";
import './WeekBar.scss';

const WeekBar = ({week}) => {
  return (
    <div className="weather-week">
      {week.map((item) => {
        return (
          <div key={item.dt} className="weather-week__item">
            <div className="week-item__day">
              {Moment(item.dt_txt).format("dddd")}
            </div>
            <img src={imageLoader(item.weather[0].icon)} alt="weather icon" />
            <span>{item.weather[0].main}</span>
            <span>{Math.round(item.main.temp)}℃</span>
          </div>
        );
      })}
    </div>
  );
};

export default WeekBar;
