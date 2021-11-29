import React, { useEffect, useState } from "react";
import "../2-UseEffect/UseEffect.css";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);
  console.log("Render Component");
  return (
    <div className="useEffect-basics">
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default UseEffectBasics;
