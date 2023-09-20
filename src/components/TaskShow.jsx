import React, { useState } from "react";

function TaskShow({ onTitle, onDelete }) {
  const [modalTaskId, setModalTaskId] = useState(null); // Initialize modalTaskId as null

  const openModal = (taskId) => {
    setModalTaskId(taskId);
  };

  const handleSure = () => {
    onDelete(modalTaskId); // Use modalTaskId to identify the task to delete
    setModalTaskId(null); // Reset modalTaskId to close the modal
  };

  const allTaskDisplay = onTitle.map((item) => (
    <div className="container" key={item.id}>
      <div className="row">
        <div className="col-12 ">
          <div className="task">
            <p>{item.term}</p>
            <div className="btn-box">
              <button className="btn" onClick={() => openModal(item.id)}>
                Delete
              </button>
              <button className="btn">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="n">
      {allTaskDisplay}
      <div>
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
