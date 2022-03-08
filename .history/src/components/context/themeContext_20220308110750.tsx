import { createContext } from "react";
import { theme } from "./theme.";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};
const ThemeContext = createContext(theme);

export const ThemeContextProviderProps = (
  children: ThemeContextProviderProps
) => {};
