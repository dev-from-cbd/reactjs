import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const addTodoStyle = {
    position: "fixed",
    bottom: 10,
    display: "block",
    width: "100%",
  };

  const [title, setTitle] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: title,
      done: false,
    };
    addTodo(newTodo);
    //alert(title);
    setTitle("");
  };

  return (
    <div style={addTodoStyle}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter some Todo Task"
          style={{ width: "70%", padding: 10 }}
          required
        />
        <input
          type="submit"
          style={{ width: "10%", margin: 10, padding: 10 }}
        />
      </form>
    </div>
  );
};

export default AddTodo;
