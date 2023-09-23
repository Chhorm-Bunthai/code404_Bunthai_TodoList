import React, { useState } from "react";

function TaskCreating({ onSubmit, onData }) {
  const [word, setWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.trim() !== "") {
      onSubmit(word);
      setWord("");
    } else {
      onData(true);
    }
  };
  const handleChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <div className="input-form">
      <form onSubmit={handleSubmit} className="form">
        <input
          value={word}
          type="text"
          onChange={handleChange}
          placeholder="Add your tasks"
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default TaskCreating;
