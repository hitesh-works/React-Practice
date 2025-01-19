import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function MyComponent() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default MyComponent;

// useContext makes it easier to pass data down through the component tree without explicitly passing props at every level.
// It improves code organization and maintainability by centralizing the management of shared data.
