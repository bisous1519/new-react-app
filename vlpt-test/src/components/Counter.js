import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  const increase = () => {
    setNumber((prevNumber) => prevNumber + 1); // 최적화 관련, 함수형 업데이트
    // setNumber(number + 1);
  };
  const decrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
    // setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}
