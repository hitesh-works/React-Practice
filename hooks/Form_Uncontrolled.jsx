import React, { useRef } from "react";

function Form_Uncontrolled() {
  const refObject = useRef();
  console.log(refObject);

  function handleSubmit(e) {
    e.preventDefault();
    console.log((refObject.current.value).toUpperCase());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <br />
        <input type="text" ref={refObject} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form_Uncontrolled;


// difference b/w controlled and uncontrolled component

//  > controlled comp. vo comp. hote h jo react control krta h
//  > in this we use event handle and useState hook

//  > uncontrolled comp. vo comp. hote h jo hmara DOM control krta h
// > to directly use from dom use useRef hook