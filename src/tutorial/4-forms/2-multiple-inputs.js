import React, { useState } from "react";

const MultipleInputs = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [email, setEmail] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, new person()]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <div className="form-container">
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
      </article>
      {people.map((person, index) => {
        const { id, firstName, email, age } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleInputs;
