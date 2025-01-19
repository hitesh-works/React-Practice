import React, { useState } from "react";

function InputField() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default InputField;

// In this example, the input field is a controlled component. Its value is stored in the state using the useState hook. The component's value is always in sync with the state, and updates to the input field will automatically update the state. This means that the component's behavior and value are completely controlled by the state.



//What is Controlled Component?

// A controlled component is a type of component in React that is controlled by the state. In other words, the component's value is determined by the state and the component's behavior is controlled by the state as well. The state acts as the "single source of truth" for the component's value and behavior.