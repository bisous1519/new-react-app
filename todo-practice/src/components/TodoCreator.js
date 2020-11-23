import React, { useState } from "react";

export default function TodoCreator({ addTodo }) {
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <input type="text" value={title} onChange={onChange} />
      <button
        onClick={() => {
          addTodo(title);
          setTitle("");
        }}
      >
        추가
      </button>
    </div>
  );
}
