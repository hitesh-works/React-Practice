import React from "react";

const ChildB = ({ count, setCount }) => {
  return (
    <div>
      <p>Count in Child B: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default ChildB;
