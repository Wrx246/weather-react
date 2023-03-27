import React from "react";
import { dateBuilder } from "../../helpers/dateBuilder";
import './Location.scss';

const Location = ({weather}) => {
  return (
    <div className="location-box">
      <h1>{weather.name}</h1>
      <h3>{dateBuilder(new Date())}</h3>
    </div>
  );
};

export default Location;
