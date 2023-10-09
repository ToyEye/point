"use client";

import { GlobalStyled } from "@/styled/GlobalStyled";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@/styled/theme";

export const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyled />
        {children}
      </ThemeProvider>
    </>
  );
};
