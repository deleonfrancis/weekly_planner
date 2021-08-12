import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Location() {
  const { searchedWeather, defaultWeatherData } = useSelector(
    (state) => state.weatherReducer
  );

  const [weather, setWeather] = useState(defaultWeatherData);

  useEffect(() => {
    if (searchedWeather) {
      setWeather(searchedWeather);
    }
    // eslint-disable-next-line
  }, [searchedWeather, defaultWeatherData]);

  return (
    <div>
      {weather?.location?.country === "United States of America" ? (
        <h2 className={{ marginTop: "0px" }}>
          {weather?.location?.name}, {weather?.location?.region}
        </h2>
      ) : (
        <h2 className={{ marginTop: "0px" }}>
          {weather?.location?.name}, {weather?.location?.country}
        </h2>
      )}
    </div>
  );
}
