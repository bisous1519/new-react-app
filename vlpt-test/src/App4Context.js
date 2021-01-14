import React, { useMemo, useReducer, createContext } from "react";
import CreateUser2 from "./components/CreateUser2";
import UserList from "./components/UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
  // user.active가 true인 것만 뽑아온 배열의 길이 반환!
}

const initialState = {
  users: [
    {
      id: 1,
      username: "eomji1",
      email: "anipap1@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "eomji2",
      email: "anipap2@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "eomji3",
      email: "anipap3@naver.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("unhandled action");
  }
}

export const UserDispatch = createContext(null);

function App4Context() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser2 />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      {/* <CounterReducer /> */}
    </UserDispatch.Provider>
  );
}

export default App4Context;
