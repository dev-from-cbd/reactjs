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
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
    //console.log(id);
  };

  const handleCheckboxChange = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
    });
    setTodos(newTodoList)
  };

  return (
    <div style={{ margin: 20 }}>
      <h4 align="center">React JS Web App</h4>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            todo={todo}
            removeTodo={handleRemoveTodo}
            handleChange={handleCheckboxChange}
          />
        ))
      ) : (
        <p>No todo tasks now</p>
      )}
      <AddTodo addTodo={handleAddTodo} />
    </div>
  );
};

export default TodoContainer;
