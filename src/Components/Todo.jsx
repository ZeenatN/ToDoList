import React, { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Todo() {
  //we want to addd things to list
  const [todos, setTodos] = useState([]);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todos) => todos.done).length;

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}

export default Todo;
