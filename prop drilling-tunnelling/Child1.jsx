import React from "react";

function Child1({ theme, children }) {
  return <div style={{ backgroundColor: theme }}>{children}</div>;
}

export default Child1;
