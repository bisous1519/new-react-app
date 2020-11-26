import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

export default function Counter() {
  const [state, dispatch] = useCounter({ number: 0, text: "" });
  const [diff, setDiff] = useState(0);

  const onDiffChange = (e) => {
    setDiff(parseInt(e.target.value));
  };

  const onIncrease = () => {
    dispatch({ type: "INCREASE", diff: diff });
    // dispatch : 특정 뭔가를 실행해주는 애
    // dispatch 발동시 리듀서를 실행해줌
  };
  const onDecrease = () => {
    dispatch({ type: "DECREASE", diff });
  };

  return (
    <div>
      <h1>{state.number}</h1>
      <input type="number" value={diff} onChange={onDiffChange} />
      <button onClick={onDecrease}>-{diff}</button>
      <button onClick={onIncrease}>+{diff}</button>
      <br />
      <span>{state.text}</span>
    </div>
  );
}
