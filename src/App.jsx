import "./App.css";
import TaskCreating from "./components/TaskCreating";
import { useState } from "react";
import TaskShow from "./components/TaskShow";

function App() {
  const [title, setTitle] = useState([]);
  // checking if data
  const [data, setData] = useState(false);
  const createTask = (term) => {
    const updatedTasks = [
      ...title,
      { id: Math.round(Math.random() * 10000), term, packed: false },
    ];
    setTitle(updatedTasks);
  };
  const handleDeleteTask = (id) => {
    setTitle((term) => term.filter((term) => term.id !== id));
  };

  const editTask = (id, newTerm) => {
    const updatedTasks = title.map((task) => {
      if (task.id === id) {
        return { ...task, term: newTerm };
      }
      return task;
    });
    setTitle(updatedTasks);
  };
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
      <TaskCreating
                onSubmit={createTask}
                onData={() => setData(!data)}
              />
              {data && (
                <div className="no-data">
                  <h2>No data entered!</h2>
                  <button onClick={() => setData(false)}>close</button>
                </div>
              )}
      <section className="show-all-components">
        <div className="container">
          <div className="row">
            <div className="col">
              <TaskShow
                onToggle={toggleTask}
                onTitle={title}
                onDelete={handleDeleteTask}
                onEdit={editTask}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
