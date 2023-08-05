export const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = (theme, themeIcon) => {
  return { type: TOGGLE_THEME, payload: { theme, themeIcon } };
};
