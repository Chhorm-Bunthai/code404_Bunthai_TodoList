import './App.css'
import TaskCreating from './components/TaskCreating';
import { useState } from 'react';
import TaskShow from './components/TaskShow';

function App() {
  const [title, setTitle] = useState([]);
  const [editStatus, setEditStatus] = useState(false)
  const openEdit = ()=>{
    setEditStatus(!editStatus)
  }
  const createTask = (term) => {
    const updatedTasks = [
      ...title,
      { id: Math.round(Math.random() * 10000),term },
    ];
    setTitle(updatedTasks);
  };
  const handleDeleteTask = (id)=>{
    setTitle((title)=>title.filter(title=> title.id !== id))
  }
  return (
    <>
    <header>
    <div className="header">
        <h1>TODO APP</h1>
    </div>
  </header>
  <section className='show-all-components'>
    <TaskCreating onSubmit={createTask}/>
    
  </section>
  <TaskShow onEdit={openEdit} onEditStatus = {editStatus} onTitle={title} onDelete={handleDeleteTask}/>

      
    </>
  )
}

export default App;
