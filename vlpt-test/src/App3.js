import React, {
  useMemo,
  useCallback,
  useReducer,
  useRef,
  createContext,
} from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import useInputs from "./hooks/useInputs";

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

function App3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      {/* <CounterReducer /> */}
    </UserDispatch.Provider>
  );
}

export default App3;
