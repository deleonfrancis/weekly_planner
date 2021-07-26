import { SET_THEME_LIGHT, SET_THEME_DARK } from "../actions/types";
// import { saveUserTheme } from "../../utils/userTheme";

export const setThemeLight = (userTheme) => (dispatch) => {
  // const userTheme = useSelector((state) => state.guestThemeReducer);
  dispatch({ type: SET_THEME_LIGHT, payload: "light" });
  // saveUserTheme(1, userTheme);

  // console.log("setThemeLight fired");
};

export const setThemeDark = (userTheme) => (dispatch) => {
  // const userTheme = useSelector((state) => state.guestThemeReducer);
  dispatch({ type: SET_THEME_DARK, payload: "dark" });
  // saveUserTheme(1, userTheme);

  // console.log("setThemeLight fired");
};
