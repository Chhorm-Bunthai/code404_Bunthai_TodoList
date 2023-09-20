import React from 'react'

function EditTask({onEdit}) {
  return (
    <div>
        <button onClick={onEdit}>Save</button>
        <button onClick={onEdit}>Cancel</button>
    </div>
  )
}

export default EditTask