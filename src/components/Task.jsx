import React from "react";
import PropTypes from "prop-types";
import { Button, FormCheck } from "react-bootstrap";

function Task({ text, completed, deleteTask, toggleTask }) {
  return (
    <div>
      <FormCheck type="checkbox" checked={completed} onChange={toggleTask} />
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
