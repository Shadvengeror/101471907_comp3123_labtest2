import React from "react";

function WeatherDisplay({ data }) {
  if (!data) return <p>No data yet. Search for a city.</p>;

  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={iconUrl} alt="weather icon" />
      <p>Temperature: {(data.main.temp - 273.15).toFixed(1)} °C</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
