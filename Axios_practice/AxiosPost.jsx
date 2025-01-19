import axios from "axios";
import React, { useState } from "react";

export default function AxiosPost() {
  const data = { fname: " ", lastname: "" };
  const [inputdata, setInputdata] = useState(data);
  const handleData = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputdata)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <form>
        <lable>First name: </lable>
        <input
          type="text"
          name="fname"
          value={inputdata.fname}
          onChange={handleData}
        ></input>
        <br />

        <lable>Last name: </lable>
        <input
          type="text"
          name="lastname"
          value={inputdata.lastname}
          onChange={handleData}
        ></input>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
