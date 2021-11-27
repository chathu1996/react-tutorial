import React, { useState } from "react";

const useStateArray = () => {
  const [people, setPeople] = useState([]);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button type="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </div>
  );
};

export default useStateArray;
