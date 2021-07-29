// import { currentPositionWeatherService } from "../../api/weatherApi/geoWeather";
// import {getGeoWeather, showError} from "../../api/weatherApi/geoWeather"
import { getWeather } from "../../api/weatherApi/getWeather";

import {
  GET_CURRENT_LOCATION_WEATHER,
  GET_WEATHER,
  SET_IMPERIAL,
  SET_METRIC,
} from "./types";

export const getCurrentLocationWeather = () => (dispatch) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      getWeather(`${lat} ${long}`).then((res) => {
        dispatch({ type: GET_CURRENT_LOCATION_WEATHER, payload: { ...res } });
      });
    });
  } else {
    console.log("geolocation error");
    //   $("#error-display")
    //     .text("Geolocation is not supported by this browser.")
    //     .addClass("mt-5");
  }
};

export const getSearchedWeather = (searchInput) => (dispatch) => {
  getWeather(searchInput).then((res)=> {
    dispatch({ type: GET_WEATHER, payload: {...res} });
  })
};
export const setToImperial = () => (dispatch) => {
  dispatch({ type: SET_IMPERIAL, payload: "imperial" });
};
export const setToMetric = () => (dispatch) => {
  dispatch({ type: SET_METRIC, payload: "metric" });
};
