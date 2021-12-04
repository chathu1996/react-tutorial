import React, { useState } from "react";
import Model from "./Model";

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="reducer-container">
      {showModal && <Model />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      {people.map((person) => {
        return (
          <div key="person.id">
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
