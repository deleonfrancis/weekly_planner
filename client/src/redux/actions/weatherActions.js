// import { currentPositionWeatherService } from "../../api/weatherApi/geoWeather";
// import {getGeoWeather, showError} from "../../api/weatherApi/geoWeather"
import { getWeather } from "../../api/weatherApi/getWeather";

import {
  GET_CURRENT_LOCATION_WEATHER,
  GET_WEATHER,
  SET_IMPERIAL,
  SET_METRIC,
  PUT_IN_SEARCH_HISTORY,
  REMOVE_FROM_SEARCH_HISTORY,
  CLEAR_SEARCH_HISTORY,
  SET_DEFAULT_WEATHER,
  CLEAR_DEFAULT_WEATHER,
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
  }
};

export const getSearchedWeather = (searchInput) => (dispatch) => {
  getWeather(searchInput).then((res) => {
    dispatch({ type: GET_WEATHER, payload: { ...res } });
  });
};
export const setToImperial = () => (dispatch) => {
  dispatch({ type: SET_IMPERIAL, payload: "imperial" });
};
export const setToMetric = () => (dispatch) => {
  dispatch({ type: SET_METRIC, payload: "metric" });
};

export const addToSearchHistory = () => (dispatch) => {
  dispatch({ type: PUT_IN_SEARCH_HISTORY, payload: {} });
};
export const removeFromSearchHistory = () => (dispatch) => {
  dispatch({ type: REMOVE_FROM_SEARCH_HISTORY, payload: {} });
};
export const clearSearchHistory = () => (dispatch) => {
  dispatch({ type: CLEAR_SEARCH_HISTORY, payload: {} });
};
export const setDefaultWeather = () => (dispatch) => {
  dispatch({ type: SET_DEFAULT_WEATHER, payload: {} });
};
export const clearDefaultWeather = () => (dispatch) => {
  dispatch({ type: CLEAR_DEFAULT_WEATHER });
};
