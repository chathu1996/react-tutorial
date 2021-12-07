import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Error</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
