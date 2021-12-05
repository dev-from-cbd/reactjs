import React from "react";
import Todo from "../../components/todoList";

const todoList = [
  {
    id: 1,
    title: "title #1",
    done: true,
  },
  {
    id: 2,
    title: "Create a task",
    done: true,
  },
];
const TodoContainer = () => {
  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">Todo App</h4>
      <Todo />
    </div>
  );
};

export default TodoContainer;
