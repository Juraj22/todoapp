import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

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
    <div className="App">
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
