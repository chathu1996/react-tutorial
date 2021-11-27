import React, { useState } from "react";
import "../1-useState/1-error-example.css";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Chathu",
    age: 24,
    message: "random Message",
  });

  const [name, setName] = useState("Chathu");
  const [age, setAge] = useState(24);
  const [message, setMesage] = useState("random Message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello World" });
    setMesage('Hello World');
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}></button>
    </div>
  );
};

export default UseStateObject;
