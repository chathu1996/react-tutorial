import React, { useState } from "react";
import "../1-useState/1-error-example.css";
//usetate function

const UseStateBasics = () => {
  const [text, setText] = useState("Random title");
  const handleClick = () => {
    if (text === "Random title") {
      setText("Hello World");
    } else {
      setText("Random title");
    }
  };

  return (
    <div className="container">
      <h2 className="title">{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </div>
  );
};

export default UseStateBasics;
