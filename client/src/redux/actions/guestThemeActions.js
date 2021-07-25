import { SET_THEME_LIGHT, SET_THEME_DARK } from "../actions/types";

export const setThemeLight = () => (dispatch) => {
  dispatch({ type: SET_THEME_LIGHT, payload: "light" });
  // console.log("setThemeLight fired");
};
export const setThemeDark = () => (dispatch) => {
  dispatch({ type: SET_THEME_DARK, payload: "dark" });
  // console.log("setThemeLight fired");
};
