import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Api_practice() {
  const [userdata, setUserdata] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Axios Practice</h1>
      {isLoading && <p>Loading user data...</p>}
      {error && <p>Error fetching user data: {error.message}</p>}
      {userdata && (
        <h2>
          {userdata.map((data) => (
            <h3 key={data.id}>{data.name}</h3>
          ))}
        </h2>
      )}
    </div>
  );
}
