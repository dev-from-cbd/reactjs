import React from "react";
import Todo from "../../components/todoList";
import AddTodo from "../../components/addTodo";

const todoList = [
  { id: 1, title: "title #1", done: true },
  { id: 2, title: "Create a task", done: false },
];
const TodoContainer = () => {
  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">ReactJS Web App</h4>
      {todoList.map((todo) => (
        <Todo todo={todo} />
      ))}
      <AddTodo />
    </div>
  );
};

export default TodoContainer;
