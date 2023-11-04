// TodoItem.js
import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  console.log("Child component re-rendered");

  return (
    <tr>
      <td>{todo}</td>
      <td>
        <button onClick={() => onDelete(todo)}>Delete</button>
      </td>
    </tr>
  );
};

export default React.memo(TodoItem);
