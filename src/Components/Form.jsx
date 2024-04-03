import React, { useState } from "react";
import style from "./form.module.css";

function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmission(e) {
    e.preventDefault();
    setTodos([...todos, todo]); //async
    setTodo({ name: "", done: false });
  }
  return (
    <>
      <form className={style.form} onSubmit={handleSubmission}>
        <div className={style.inputContainer}>
          <input
            className={style.moderninput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            placeholder="Enter todo item"
            value={todo.name}
          />
          <button className={style.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
