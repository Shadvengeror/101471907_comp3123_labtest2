import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card" style={{ marginTop: "20px" }}>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
