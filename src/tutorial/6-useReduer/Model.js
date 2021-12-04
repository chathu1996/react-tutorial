import React, { useEffect } from "react";

const Model = ({ modalContent, closeModal }) => {
    useEffect(()=>{
        setTimeout(()=>{
            closeModal()
        }, 3000)
    });
  return (
    <div className="modal">
      <h2>{modalContent}</h2>
    </div>
  );
};

export default Model;
