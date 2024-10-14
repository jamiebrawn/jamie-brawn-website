"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1] as Theme | undefined;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; max-age=${60 * 60 * 24 * 365}; path=/`; // 1 year expiry
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
