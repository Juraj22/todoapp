import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

function AddTaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dodaj novi zadatak"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Dodaj Zadatak
      </Button>
    </Form>
  );
}

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
