import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  // Load darkMode state from localStorage on initial render
  // Initialize darkMode state from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  // Toggle dark mode and update localStorage
  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const theme = { handleDarkModeToggle, darkMode };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
