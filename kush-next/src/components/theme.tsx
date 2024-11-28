'use client'
import React, { createContext, ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
};

const theme = {
  colors: {
    primary: "blue",
    danger: "red",
  },
};

const ThemeContext = createContext(theme);

export default function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = ()=>useContext(ThemeContext)

