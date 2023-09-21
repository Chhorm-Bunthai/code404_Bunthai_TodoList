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
  const handleDeleteTask = (id)=>{
    setTitle((title)=>title.filter(title=> title.id !== id))
  }
  console.log('title',title)
  const editTask = (id, newTerm) =>{
      const updatedTasks = title.map((task) => {
        if (task.id === id){
          return {...task, term: newTerm}
        }
        return task
      })
      setTitle(updatedTasks)
  }

  const toggle = (id)=>{
    setTitle(title.map(title=>{
      title.id == id ? {...title, checked: !title.checked} : title
    }))
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
  <TaskShow  onTitle={title} onDelete={handleDeleteTask} onEdit={editTask}/>
    </>
  )
}

export default App;