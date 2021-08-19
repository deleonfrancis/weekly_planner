import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import guestThemeReducer from "./guestThemeReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  weatherReducer,
  guestThemeReducer,
  eventReducer,
});
