import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../Data";

const Person = () => {
  const [name, setName] = useState("Default name");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
