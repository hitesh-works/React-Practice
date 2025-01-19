import React, { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default MyComponent;

// useRef: allows you to access and modify the value of a DOM node or a React component instance. It is often used to store a reference to a DOM element so that you can access its properties and methods, such as its position, size, or to manipulate its style, or to store a reference to a component instance to access its methods, such as to trigger a re-render.
