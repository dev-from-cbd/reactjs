import React, { useState } from "react";

const AddTodo = () => {
  const addTodoStyle = {
    position: "fixed",
    bottom: 10,
    display: "block",
    width: "100%",
  };

  const [title, setTitle] = useState("");

  return (
    <div style={addTodoStyle}>
      <form>
        <input
          type="text"
          placeholder="Enter some Todo Task"
          style={{ width: "70%", padding: 10 }}
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
