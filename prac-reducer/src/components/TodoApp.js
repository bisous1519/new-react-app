import React, { useReducer } from "react";
import TodoCreator from "./TodoCreator";
import TodoItems from "./TodoItems";
import useCounter from "../hooks/useCounter";

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         todos: state.todos.concat({
//           id: action.id,
//           title: action.title,
//           done: false,
//         }),
//       };
//     case "REMOVE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => action.id !== todo.id),
//       };
//     default:
//       throw new Error("unhandled action type");
//   }
// }
const initialState = {
  todos: [],
};
export default function TodoApp() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useCounter(initialState);

  return (
    <div>
      <TodoCreator dispatch={dispatch} />
      {state.todos.map((todo) => (
        <TodoItems todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </div>
  );
}
