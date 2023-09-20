import React from 'react'

function TaskShow({onTitle}) {
    const allTaskDisplay = onTitle.map((item) => (
    <div key={item.id}>
      <ul>
        <li className="display-task">
          <div>{item.term}</div>
          <div className="btn-box">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </li>
      </ul>
    </div>
  ));
  return (
    <div>{allTaskDisplay}</div>
  )
}

export default TaskShow