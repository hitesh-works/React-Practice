import React, { useState } from "react";

function ExampleComponent() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


// useState: allows you to add state to your functional components.

// Q. Why state is modified using useState not directly updating it?

// In React, direct modification of the State object is not recommended because it can lead to unexpected behavior. React uses a virtual DOM to render components and update the actual DOM, and direct modification of the state could cause the virtual DOM to get out of sync with the actual DOM.

// same as the above example 