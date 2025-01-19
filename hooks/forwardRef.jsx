// What does React.forwardRef do?

// React.forwardRef is a higher-order component in React that allows you to pass a ref to a component created using a functional component. This can be useful when you need to access the underlying DOM node or a child component created by the functional component.

// Here's an example of how you could use React.forwardRef to pass a ref to a custom input component:

import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

const PracticeForwardRef = () => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default PracticeForwardRef;
