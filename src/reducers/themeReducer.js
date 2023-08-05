import { TOGGLE_THEME } from "../actions/themeActions";

export const initialState = {
  theme: localStorage.getItem("theme") || "light",
  themeIcon: localStorage.getItem("themeIcon") || "moon",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload.theme,
        themeIcon: action.payload.themeIcon,
      };
    default:
      return state;
  }
};

export default themeReducer;
