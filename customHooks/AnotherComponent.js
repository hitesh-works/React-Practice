import React from "react";

import { useFetch } from "./useFetch";

// This component fetches a post from a JSONPlaceholder API

// useFetch is a custom hook that makes a GET request to the provided URL and returns the response data, loading state, and error state.

function AnotherComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Post Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      <h1>Post</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
}

export default AnotherComponent;
