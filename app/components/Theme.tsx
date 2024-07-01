import { emitCustomEvent, useCustomEventListener } from "react-custom-events";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

// Create a custom hook to update the theme from wherever we like
export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage({
    key: "jshuttleworth-theme",
    defaultValue: "system"
  });

  // Listen for theme event and update local storage to match
  useCustomEventListener("theme-update", (newTheme: string) => setCurrentTheme(newTheme));

  // Trigger a global event to change the theme
  const updateTheme = (theme: string) => emitCustomEvent("theme-update", theme);

  // Update theme data on body when changed
  useEffect(() => {
    document.body.dataset.theme = currentTheme;
  }, [currentTheme]);

  return { currentTheme, updateTheme };
};