import React from 'react'
import { useState } from 'react';


function TaskCreating({onSubmit}) {
    const [word, setWord] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(word);
        setWord('')
    }
    const handleChange = (e) =>{
        setWord(e.target.value)
    }
  return (
    <div className='input-form'>
        <form onSubmit={handleSubmit} className='form'>
            <input value={word} type="text" onChange={handleChange} placeholder='Add your tasks' />
        </form>
    </div>
  )
}

export default TaskCreating