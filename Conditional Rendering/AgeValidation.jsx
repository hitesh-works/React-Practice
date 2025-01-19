import React, { useState } from "react";

function AgeValidation() {
  const [isVlaid, setIsValid] = useState(true);

  //   if-else

  //   if (isVlaid) {
  //     return <h1>You Can Vote</h1>;
  //   } else {
  //     return <h1>You cannot Vote</h1>;
  //   }

  // Element variable

  //   let age;
  //   if (isVlaid) {
  //     age = <h1>You can vote</h1>;
  //   } else {
  //     age = <h1>You cannot vote</h1>;
  //   }
  //   return <>{age}</>;

  // Ternary Operator(Best Practice)

  //   return <>{isVlaid ? <div>You can vote</div> : <div>You cannot vote</div>}</>;

  // Short circuit Operator >> use when there is only if condition and no else there

  return <>{isVlaid && <div>You can vote</div>}</>;
}

export default AgeValidation;

// What is Conditional Rendering?

// Conditional rendering in React refers to the technique of showing or hiding elements based on a certain condition. This is useful when you need to dynamically render parts of your component based on certain conditions, such as whether a user is logged in or not.
