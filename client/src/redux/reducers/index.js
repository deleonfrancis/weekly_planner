import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import guestThemeReducer from "./guestThemeReducer";

export default combineReducers({
  weatherReducer,
  guestThemeReducer,
});
