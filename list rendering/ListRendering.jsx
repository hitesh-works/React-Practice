import React from "react";

const ListRendering = () => {
  const IPL = ["CSK", "MI", "RCB", "KKR"];
  const result = IPL.map((x, index) => <h1 key={index}>{x}</h1>);
  return (
    <div>
      <h6> {result}</h6>
    </div>
  );
};

export default ListRendering;
//In React, list rendering is the process of dynamically creating and displaying a set of elements based on an array of data.