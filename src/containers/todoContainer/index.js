import React from "react";
import Todo from "../../components/todoList";

const todoList = [
  { id: 1, title: "title #1", done: true },
  { id: 2, title: "Create a task", done: false },
];
const TodoContainer = () => {
  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">React JS Web App</h4>
      {todoList.map((todo) => (
        <Todo todos={todo} />
      ))}
      {/* <Todo /> */}
    </div>
  );
};

export default TodoContainer;
