import React, { useState } from "react";

let id = 0;
export default function TodoCreator({ dispatch }) {
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const onClick = () => {
    if (title !== "") {
      dispatch({ type: "ADD_TODO", id: id++, title });
      setTitle("");
    } else {
      alert("할 일을 입력해주세요");
    }
  };
  const btnStyle = {
    borderRadius: "50%",
    outline: "none",
  };
  return (
    <div>
      <input type="text" value={title} onChange={onChange} />
      <button style={btnStyle} onClick={onClick}>
        +
      </button>
    </div>
  );
}
