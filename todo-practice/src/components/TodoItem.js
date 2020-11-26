import React from "react";

export default function TodoItem({ todo, removeTodo, onToggle }) {
  const titleStyle = {
    textDecoration: "line-through",
  };
  const removeBtnStyle = {
    background: "none",
    border: "none",
    color: "coral",
    fontWeight: "500",
  };
  return (
    <div>
      <span
        style={todo.completed ? titleStyle : null}
        onClick={() => onToggle(todo.id)}
      >
        {todo.title}
      </span>
      <button style={removeBtnStyle} onClick={() => removeTodo(todo.id)}>
        x
      </button>
    </div>
  );
}
