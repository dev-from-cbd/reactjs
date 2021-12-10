import React, { useState } from "react";
import Todo from "../../components/todoList";
import AddTodo from "../../components/addTodo";

const todoList = [
  { id: 1, title: "title #1", done: true },
  { id: 2, title: "Create a task", done: false },
];
const TodoContainer = () => {
  const [todos, setTodos] = useState(todoList);
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  const handleRemoveTodo = (id) => {
    const newTodos.filter((todo) => todo.id === id);
    //console.log(id);
  };

  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">React JS Web App</h4>
      {todos.map((todo) => (
        <Todo todo={todo} removeTodo={handleRemoveTodo} />
      ))}
      <AddTodo addTodo={handleAddTodo} />
    </div>
  );
};

export default TodoContainer;
