import React, { useState } from "react";
import s from "./Addtodo.module.css";
import { Row, Col, Button, FormControl } from "react-bootstrap";

function Addtodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  console.log(todo);

  return (
    <Row>
      <Col className={s.addToDo}>
        <FormControl
          placeholder="Введите задачу!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className={s.btn} variant="warning" onClick={saveTodo}>
          Save
        </Button>
      </Col>
    </Row>
  );
}
export default Addtodo;
