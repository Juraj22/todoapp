import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

class TaskList extends Component {
  render() {
    const { tasks, deleteTask, toggleTask } = this.props;

    return (
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task.text}
            completed={task.completed}
            deleteTask={() => deleteTask(index)}
            toggleTask={() => toggleTask(index)}
          />
        ))}
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  deleteTask: PropTypes.func,
  toggleTask: PropTypes.func,
};

export default TaskList;
