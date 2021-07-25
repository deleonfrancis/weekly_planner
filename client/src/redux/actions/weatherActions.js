import { GET_CURRENT_LOCATION_WEATHER, GET_WEATHER } from "./types";

export const getCurrentLocationWeather = () => (dispatch) => {
  dispatch({ type: GET_CURRENT_LOCATION_WEATHER, payload: {} });
};

export const getWeather = () => (dispatch) => {
  dispatch({ type: GET_WEATHER, payload: {} });
};
