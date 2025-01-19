import React, { useState, useMemo } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}

export default Counter;

// useMemo is a higher-order component that caches the result of a function based on its dependencies. In this case, we use useMemo to calculate doubleCount, which only updates when count changes. This can help optimize the performance of the component by avoiding unnecessary re-renders when count doesn't change.

// useMemo: allows you to memoize values computed in your functional components for performance optimization. The useMemo hook is a way to optimize performance in React by memoizing a value. When a value is memoized, it means that its result is cached and reused between render cycles, instead of being recalculated every time the component re-renders. This can be useful for optimizing expensive calculations, such as filtering or mapping over large data sets, or complex calculations that are used in the render method.