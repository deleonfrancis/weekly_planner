import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ImperialWeather() {
  const { searchedWeather } = useSelector(
    (state) => state.weatherReducer
  );
  //   const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
    // console.log(searchedWeather);
  }, [searchedWeather]);
  return (
    <div>
      <h1>{searchedWeather.current.temp_f}°</h1>
      <p>High: {searchedWeather.forecast.forecastday[0].day.maxtemp_f}°</p>{" "}
      <p>Low: {searchedWeather.forecast.forecastday[0].day.mintemp_f}°</p>
      <p>Feels Like: {searchedWeather.current.feelslike_f}°</p>
      <p>Humidity:{searchedWeather.current.humidity_f}</p>
      <ul>
        Wind
        <li>{searchedWeather.current.wind_mph} mph</li>
        <li>Direction: {searchedWeather.current.wind_dir}</li>
        <li>Degree: {searchedWeather.current.wind_degree}°</li>
      </ul>
      <p>UV Index: {searchedWeather.current.uv}</p>
    </div>
  );
}

export default ImperialWeather;
