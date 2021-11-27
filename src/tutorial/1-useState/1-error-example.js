import React from "react";
import "../1-useState/1-error-example.css";

const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = () => {
    title = "Hello People";
    console.log(title);
  };
  return (
    <div>
      <div className="container">
        <h2 className="title">{title}</h2>
        <button type="button" className="btn" onClick={handleClick}>
          Change title
        </button>
      </div>
    </div>
  );
};

export default ErrorExample;
