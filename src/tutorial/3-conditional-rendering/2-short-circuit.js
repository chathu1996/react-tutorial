import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firtValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <div className="condtional-rendering">
      {/*<h1>{firtValue}</h1>
  <h1>Value : {secondValue}</h1> */}
      <h1>{text || "Chathu Jaya"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no Error...</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
