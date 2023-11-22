import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Task({ text, completed, deleteTask, toggleTask }) {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleTask} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <Button variant="danger" onClick={deleteTask}>
        Obriši
      </Button>
    </div>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default Task;
