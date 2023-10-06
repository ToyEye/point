"use client";

import { GlobalStyled } from "@/app/styled/GlobalStyled";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "@/app/styled/theme";

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
