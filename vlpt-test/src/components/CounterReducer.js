import React, { useReducer } from "react";

function reducer(state, action) {
  //                      ㄴ> { type : 'INCREMENT' }
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      // return state;
      throw new Error("Unhandled action");
  }
} // 상태(state)의 업데이트 로직이 컴포넌트(CounterReducer) 밖에 있음!

export default function CounterReducer() {
  const [number, dispatch] = useReducer(reducer, 0);
  //                                    ㄴ> dispatch 에서 action을 넘겨줄 함수, state(여기서의 number)의 초기값

  const increase = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const decrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
    </div>
  );
}
