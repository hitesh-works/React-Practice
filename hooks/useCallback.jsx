import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Counter;

// In this example, we pass a function increment to useCallback and specify [setCount] as the dependencies array. This means that increment will only be re-created if setCount changes. In most cases, it's not necessary to specify the dependencies array, but it's recommended when working with functions that are passed as props to child components, to avoid unnecessary re-renders of those components.

// useCallback: allows you to memorize your callback functions for performance optimization. The useCallback hook is a way to optimize performance in React by memoizing a function. When a function is memoized, it means that its result is cached and reused between render cycles, instead of being recalculated every time the component re-renders. This can be useful for functions that are passed as props to child components, to avoid unnecessary re-renders of those components.
