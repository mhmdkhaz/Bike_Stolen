import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { ReactNode } from "react";
import { GlobalStyle } from "../globalStyle";
import { createTheme } from "../index";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWraper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const theme = createTheme({
    responsiveFontSizes: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
