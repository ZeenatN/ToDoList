import React from "react";
import style from "./todoitem.module.css";

function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const strike = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemname}>
        <span className={strike} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={style.delButton}
            onClick={() => handleDelete(item)}
          >
            Del
          </button>
        </span>
      </div>

      <hr className={style.line} />
    </div>
  );
}

export default Todoitem;
