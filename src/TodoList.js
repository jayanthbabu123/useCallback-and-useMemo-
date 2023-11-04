import React, { useState, useCallback } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const handleDelete = useCallback((todoToDelete) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo !== todoToDelete),
    );
  }, []);
  return (
    <div>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <TodoItem key={todo} todo={todo} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
