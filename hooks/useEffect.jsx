import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ExampleComponent;

// useEffect: allows you to perform side effects in your functional components, such as API calls or updating the document title.

// Note that the effect function will run every time the component renders, which includes both the initial render and any subsequent updates. If you only want the effect to run on certain updates, you can provide an array of dependencies as the second argument to useEffect. The effect function will only run if one of the dependencies has changed.

// import React, { useState, useEffect } from 'react';

// function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]); // Only re-run the effect if count changes

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default ExampleComponent;

// This helps to optimize the performance of your component by avoiding unnecessary updates.

