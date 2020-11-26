import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        number: state.number + action.diff,
        text: `${action.diff}만큼 증가되어서 ${
          state.number + action.diff
        }가 되었습니다.`,
      };
    case "DECREASE":
      return {
        ...state,
        number: state.number - action.diff,
        text: `${action.diff}만큼 감소되어서 ${
          state.number - action.diff
        }가 되었습니다.`,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat({
          id: action.id,
          title: action.title,
          done: false,
        }),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => action.id !== todo.id),
      };

    default:
      // switch를 다 돌았는데 dispatch된 애(지금으로따지면 type: ~ )가 없다! 하면 에러띄워주기
      throw new Error("Unhandled Action Type");
  }
}

export default function useCounter(initialState) {
  //                                     함수,    state의 기본값
  const [state, dispatch] = useReducer(reducer, initialState);
  // state : 상태
  // dispatch : reducer 함수를 발동시켜주는 장치 -> dispatch어쩌고 하면 reducer함수가 실행됨
  // action : dispatch안에 넣어준게 들어가게됨 -> dispatch에서 type을 넘겨줬으므로 reducer함수에서 action.type으로 접근가능
  // reducer

  return [state, dispatch];
}
