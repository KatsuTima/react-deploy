import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Addtodo from "./components/AddToDo/Addtodo";
import Header from "./components/Header/Header";
import ListTodo from "./components/ListTodo/ListTodo";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "two todo",
      status: true,
    },
    {
      id: 3,
      title: "there todo",
      status: false,
    },
  ]);

  return (
    <Container>
      <Header />
      <Addtodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
