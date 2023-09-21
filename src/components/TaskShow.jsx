import React, { useState } from "react";
import EditTask from "./EditTask";

function TaskShow({ onTitle, onDelete, onEdit, }) {
  const [modalTaskId, setModalTaskId] = useState(null);

  const openModal = (taskId) => {
    setModalTaskId(taskId);
  };

  const handleSure = () => {
    onDelete(modalTaskId);
    setModalTaskId(null);
  };

  // edit
  const [editStates, setEditStates] = useState({});

  const toggleEdit = (taskId) => {
    setEditStates((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
  };

  const allTaskDisplay = onTitle.map((item) => (
    <div className="container" key={item.id}>
      <div className="row">
        <div className="col-12">
          <div className="task">
            <p>
              {item.term}
            </p>
            <div className="btn-box">
              <button className="btn" onClick={() => openModal(item.id)}>
                Delete
              </button>
              <button className="btn" onClick={() => toggleEdit(item.id)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {editStates[item.id] && (
        <EditTask
          onText={item}
          onCancel={() => toggleEdit(item.id)}
          onEdit={(updatedText) => {
            toggleEdit(item.id); // Close the modal
            onEdit(item.id, updatedText);
          }}
        />
      )}
    </div>
  ));

  return (
    <div className="n">
      {allTaskDisplay}
      <div className="modal-layout">
        {modalTaskId !== null && (
          <div className="modal">
            <h2>Are you sure?</h2>
            <div className="answer">
              <button onClick={handleSure}>Sure?</button>
              <button onClick={() => setModalTaskId(null)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskShow;
