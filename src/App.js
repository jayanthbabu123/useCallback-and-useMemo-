// App.js
import React from "react";
import TodoList from "./TodoList";
import "./styles.css"; // Add CSS for styling

function App() {
  const initialTodos = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={initialTodos} />
    </div>
  );
}

export default App;
