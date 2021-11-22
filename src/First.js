import React from "react";

function First() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Hello World</h1>;
const Message = () => {
  return <p>This is my component</p>
}

export default First;
