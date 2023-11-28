import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="App">
        <h1>To-Do App</h1>
        <nav>
          <li>
            <Link to="/">Svi Taskovi</Link>
          </li>
          <li>
            <Link to="/active">Aktivni Taskovi</Link>
          </li>
          <li>
            <Link to="/completed">Dovršeni Taskovi</Link>
          </li>
        </nav>
        <AddTaskForm addTask={addTask} />
        <Routes>
          <Route
            path="/active"
            element={
              <TaskList
                tasks={tasks.filter((task) => !task.completed)}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            }
          />
          <Route
            path="/completed"
            element={
              <TaskList
                tasks={tasks.filter((task) => task.completed)}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            }
          />
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            }
          />
        </Routes>
        <button onClick={() => setTasks([])}>Obriši sve Taskove</button>
      </div>
    </Router>
  );
}

export default App;
