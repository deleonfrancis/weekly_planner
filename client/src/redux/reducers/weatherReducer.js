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
} from "../actions/types";

const initialState = {
  currentLocationWeather: null,
  searchedWeather: null,
  unitOfMeasure: "imperial",
  searchHistory: [],
  defaultWeather: null,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_LOCATION_WEATHER:
      //   console.log(payload);
      return {
        ...state,
        currentLocationWeather: payload,
        searchedWeather: payload,
      };
    case SET_IMPERIAL:
      // console.log(payload);
      return {
        ...state,
        unitOfMeasure: payload,
      };
    case SET_METRIC:
      // console.log(payload);
      return {
        ...state,
        unitOfMeasure: payload,
      };
    case GET_WEATHER:
      return {
        ...state,
        searchedWeather: payload,
      };
    case PUT_IN_SEARCH_HISTORY:
      // console.log(payload);
      return {
        ...state,
        searchHistory: [action.payload, ...state.searchHistory],
      };
    case REMOVE_FROM_SEARCH_HISTORY:
      // console.log(action.payload);
      return {
        ...state,
        searchHistory: state.searchHistory.filter(
          (search) => search.id !== action.payload
        ),
      };
    case CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: [],
      };
    case SET_DEFAULT_WEATHER:
      return {
        ...state,
        defaultWeather: payload,
      };
    case CLEAR_DEFAULT_WEATHER:
      return {
        ...state,
        defaultWeather: null,
      };
    default:
      return state;
  }
}
