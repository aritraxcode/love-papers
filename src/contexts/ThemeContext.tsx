import { createContext, useContext, useState, type ReactNode } from "react";

export type PaperTheme = "gazette" | "chronicle" | "simple";

interface ThemeContextType {
  theme: PaperTheme;
  setTheme: (theme: PaperTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<PaperTheme>("simple");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
