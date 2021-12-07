import React, { useState } from "react";
import { data } from "../../Data";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h2>People Page</h2>
      {people.map((person) => {
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <Link to={`/person/${person.id}`}>Learn More</Link>
        </div>;
      })}
    </div>
  );
};

export default People;
