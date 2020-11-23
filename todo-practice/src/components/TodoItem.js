import React from "react";

export default function TodoItem({ todo, removeTodo }) {
  const titleStyle = {
    textDecoration: "line-through",
  };
  return (
    <div>
      <span style={todo.done ? titleStyle : null}>{todo.title}</span>
      <button onClick={() => removeTodo(todo.id)}>제거</button>
    </div>
  );
}
