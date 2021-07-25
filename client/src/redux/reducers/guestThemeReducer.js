import { SET_THEME_LIGHT, SET_THEME_DARK } from "../actions/types";

const initialState = {
  theme: "dark",
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME_LIGHT:
    case SET_THEME_DARK:
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
}
