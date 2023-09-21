import React, { useState } from "react";

function EditTask({ onText, onEdit }) {
  const [text, setText] = useState(onText.term);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    onEdit(text);
  };

  return (
    <div className="middle">
    <div className="edit">
      <h2>Edit your task :</h2>
      <form onSubmit={handleSubmit} className="form-edit">
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
    </div>
  );
}

export default EditTask;
