// import { currentPositionWeatherService } from "../../api/weatherApi/geoWeather";
import { GET_CURRENT_LOCATION_WEATHER, GET_WEATHER } from "./types";

export const getCurrentLocationWeather = (weatherData) => (dispatch) => {
  // currentPositionWeatherService()
  dispatch({ type: GET_CURRENT_LOCATION_WEATHER, payload: {weatherData} });
};

export const getSearchedWeather = () => (dispatch) => {
  dispatch({ type: GET_WEATHER, payload: {} });
};
