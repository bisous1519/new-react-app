import React from "react";

export default function TodoItems({ todo, dispatch }) {
  const onClick = () => {
    dispatch({ type: "REMOVE_TODO", id: todo.id });
  };
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={onClick}>x</button>
    </div>
  );
}
