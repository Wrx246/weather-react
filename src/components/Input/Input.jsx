import React from "react";
import './Input.scss'

const Input = ({search, setSearch, fetchWeather}) => {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={fetchWeather}
      type="search"
      className="search-body"
      placeholder="Search..."
    />
  );
};

export default Input;
