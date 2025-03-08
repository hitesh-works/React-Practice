import React from "react";

import useFetch from "./useFetch";

// This component fetches data from an API and displays it.

function MyComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null; // or an empty div;

  return (
    <div>
      <h1>Todo Item</h1>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default MyComponent;
