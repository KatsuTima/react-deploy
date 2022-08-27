import React, { useState } from "react";
import { Button } from "react-bootstrap";
import s from "./ListTodo.module.css";

export default function ListTodo({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)}>🗃</Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)}>💣</Button>
              <Button
                onClick={() => editTodo(item.id, item.title)}
                className={s.btn}
              >
                📝
              </Button>
              <Button onClick={() => statusTodo(item.id)} className={s.btn}>
                📌/🗑
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
