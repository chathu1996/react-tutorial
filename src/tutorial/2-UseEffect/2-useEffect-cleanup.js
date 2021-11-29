import React, { useEffect, useState } from "react";
import "../2-UseEffect/UseEffect.css";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Clean up");
      window.removeEventListener("resize".checkSize);
    };
  }, []);
  return (
    <div className="useEffect-basics">
      <h1>Window</h1>
      <h2>{size} px</h2>
    </div>
  );
};

export default UseEffectCleanup;
