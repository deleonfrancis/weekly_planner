import { SET_THEME_LIGHT,SET_THEME_DARK, SAVE_THEME } from "../actions/types";

export const setThemeLight = () => (dispatch) => {
  dispatch({ type: SET_THEME_LIGHT, payload: "light" });
};
export const setThemeDark = () => (dispatch) => {
  dispatch({ type: SET_THEME_DARK, payload: "dark" });
};
