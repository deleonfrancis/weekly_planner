import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

function WeatherModalPage() {
  const { currentWeather } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(currentWeather);
  }, [currentWeather]);

  return (
    <div>
      {currentWeather.location.country === "United States of America" ? (
        <h3>
          {currentWeather.location.name}, {currentWeather.location.region}
        </h3>
      ) : (
        <h3>
          {currentWeather.location.name}, {currentWeather.location.country}
        </h3>
      )}
    </div>
  );
}

export default WeatherModalPage;
