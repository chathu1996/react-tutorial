import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  console.log(refContainer);
  return (
    <div className="useRef-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <input type="text" ref={refContainer} />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </div>
  );
};

export default UseRefBasics;
