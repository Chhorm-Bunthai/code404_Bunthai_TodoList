import './App.css'
import TaskCreating from './components/TaskCreating';
import { useState } from 'react';
import TaskShow from './components/TaskShow';

function App() {
  const [title, setTitle] = useState([]);
  const createTask = (term) => {
    const updatedTasks = [
      ...title,
      { id: Math.round(Math.random() * 10000),term },
    ];
    setTitle(updatedTasks);
  };
  return (
    <>
      <TaskCreating onSubmit={createTask}/>
      <TaskShow onTitle={title}/>
    </>
  )
}

export default App;
