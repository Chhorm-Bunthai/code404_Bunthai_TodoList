import './App.css'
import TaskCreating from './components/TaskCreating';
import { useState } from 'react';
import TaskShow from './components/TaskShow';

function App() {
  const [title, setTitle] = useState([]);
  const createTask = (term) => {
    const updatedTasks = [
      ...title,
      { id: Math.round(Math.random() * 10000),term,packed:false },
    ];
    setTitle(updatedTasks);
  };
  const handleDeleteTask = (id)=>{
    setTitle((title)=>title.filter(title=> title.id !== id))
  }
  
  const editTask = (id, newTerm) =>{
      const updatedTasks = title.map((task) => {
        if (task.id === id){
          return {...task, term: newTerm}
        }
        return task
      })
      setTitle(updatedTasks)
  }
  const toggleTask = (id) => {
    setTitle((title) =>
      title.map((task) =>
        task.id === id ? { ...task, packed: !task.packed } : task
      )
    );
  };
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
  <TaskShow onToggle={toggleTask}  onTitle={title} onDelete={handleDeleteTask} onEdit={editTask}/>
    </>
  )
}

export default App;