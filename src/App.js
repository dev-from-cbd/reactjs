import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import TodoContainer from "./containers/todoContainer";

function App() {
  return (
    <div className="App">
      <h1 align="center">Task Manager</h1>
      <TodoContainer />
    </div>
  );
}

export default App;
