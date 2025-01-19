import React from "react";

function Child2({ theme, children }) {
  return (
    <div style={{ color: theme === "dark" ? "white" : "black" }}>
      {children}
    </div>
  );
}

export default Child2;
