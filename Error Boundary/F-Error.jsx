import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const logError = (error, info) => {
      console.error(error, info);
      setHasError(true);
    };
    window.onerror = logError;
    return () => {
      window.onerror = null;
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return children;
};

export default ErrorBoundary;

// <ErrorBoundary>
//   <MyComponentThatMightThrowAnError />
// </ErrorBoundary>

// What does Error Boundary do?

// In React, an Error Boundary is a special type of component that is used to handle errors that occur in its child components. An Error Boundary can catch JavaScript errors anywhere in its child component tree and display a fallback UI instead of the component tree that crashed.
