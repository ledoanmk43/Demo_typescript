import { createContext } from "react";
import { theme } from "./theme.";

type ThemeContext = {
  children: React.ReactNode;
};
const ThemeContext = createContext(theme);
