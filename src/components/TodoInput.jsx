import React, { useState } from "react";

const TodoInput = ({ onHandleAdd }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-container">
      <input
        placeolder="add task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (!inputValue) return;
          onHandleAdd(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
