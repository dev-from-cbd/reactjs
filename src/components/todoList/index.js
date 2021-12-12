import React from "react";

const Todo = ({ todo, removeTodo }) => {
  //console.log(todo);
  return (
    <div>
      <input
        type="checkbox"
        style={{
          margin: "0 10px",
        }}
        checked={todo.done}
        onChange={() => console.log(todo.id)}
      />

      <span>{todo.title}</span>

      <span
        style={{
          position: "fixed",
          right: 20,
          padding: "0 10px",
          cursor: "pointer",
          fontWeight: 600,
        }}
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        X
      </span>

      <hr />
    </div>
  );
};

export default Todo;
