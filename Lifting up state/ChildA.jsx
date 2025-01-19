import React from "react";

const ChildA = ({ count, setCount }) => {
  return (
    <div>
      <p>Count in Child A: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ChildA;
