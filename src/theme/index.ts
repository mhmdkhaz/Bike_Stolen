import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";
import { lightThemeOptions } from "./light-theme-options";

// Define the type for the configuration object
interface ThemeConfig {
  responsiveFontSizes?: boolean;
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions as ThemeOptions,
    lightThemeOptions as ThemeOptions,
    {
      direction: "ltr",
    }
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
