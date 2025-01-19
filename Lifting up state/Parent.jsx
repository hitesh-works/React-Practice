import React, { useState } from "react";

// Parent component
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} setCount={setCount} />
    </div>
  );
}

