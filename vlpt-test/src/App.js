import React, { useRef, useState, useMemo, useCallback } from "react";
import produce from "immer";
import App3 from "./App3";
import App4Context from "./App4Context";
import ContextSample from "./components/ContextSample";
import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import CreateUser from "./components/CreateUser";
import Hello from "./components/Hello";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import Wrapper from "./components/Wrapper";
import ReducerApp from "./ReducerApp";
import ReducerApp2 from "./ReducerApp2";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
  // user.active가 true인 것만 뽑아온 배열의 길이 반환!
}

function App() {
  const [inputs, setInputs] = useState({ username: "", email: "" });
  const { username, email } = inputs; // inputs에서 username, email을 미리 추출해주자
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value, // name이 email이었으면 email의 value값을 바꾸고, username이면 username의 value값을 바꿔줌
      });
    },
    [inputs] // onChange함수는 inputs가 바뀔때에만 함수가 새로 만들어지고, 그렇지 않은 경우에는 기존에 만들어진 함수를 재사용하게 됨.
  );
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4); // nextId라는 값을 useRef로 관리하는 이유 : 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없기때문에!

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]); // 이렇게 해도 됨! push사용하지 x
    setUsers((users) => users.concat(user)); // 이렇게 하게되면 users를 가져와서 그 안에 user를 추가한 새로운 배열을 반환하게됨.
    //       ㄴ useState의 함수형 업데이트! -> 이 파라미터에서 최신 users를 조회하기 때문에 useCallback의 deps에 users가 들어가지 않아도됨! => 해당 이 함수가 실행될 때 쓸데없이 users가 리렌더링 되는걸 막을 수 있음!
    setInputs({
      username: "",
      email: "",
    });
    //console.log(nextId.current); // 4
    nextId.current += 1; // 바로이때임!! => 컴포넌트가 리렌더링되지 x
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
    // 배열 안의 원소를 업데이트할 때에도 .map을 사용!
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  // useMemo : 특정 값이 바뀌었을때만 특정 함수를 실행해서 연산하도록하고
  //           원하는 값이 바뀌지 않았다면, 리랜더링 할 때 이전의 값을 재사용할 수 있게 해줌.
  //           성능 최적화 할 때 쓰임.

  return (
    <>
      <br />
      {"1) --- props 통해 컴포넌트에게 값 전달 + 조건부렌더링 ----------------"}
      <Wrapper>
        <Hello name="엄지" color="royalblue" isSpecial={true} />
        <Hello color="pink" />
        {/* Hello 에서 넘겨준 name, color --> props */}
      </Wrapper>
      <br />
      {"2) --- useState ---------------------------------------------------"}
      <Counter />
      <br />
      {
        "3) --- useState 이용한 input 상태 관리 + useRef : 특정 DOM 선택 -------"
      }
      <InputSample />
      <br />
      {
        "4) --- useRef : 컴포넌트 안의 변수 + 동적인 배열렌더링 : map + filter ---"
      }{" "}
      <br />
      {"------- useEffect"}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
      <br />
      {"5) -----------------------------------------"}
      <br />
      {"useState대신, useReducer를 사용한 counter!"}
      <CounterReducer />
      <br />
      {"6) -----------------------------------------"}
      <br />
      {"useReducer를 사용한 counter!"}
      <ReducerApp />
      <br />
      {"7) -----------------------------------------"}
      <br />
      {"customHook 만들어서 input 관리하기"}
      <ReducerApp2 />
      <br />
      {"8) -----------------------------------------"}
      <br />
      {"Context API 로 전역값 관리하기"}
      <ContextSample />
      <br />
      <br />
      {"9) -----------------------------------------"}
      <br />
      {"UserDispatch Context 만들기"}
      <App3 />
      <br />
      {"10) -----------------------------------------"}
      <br />
      {"UserDispatch Context 완성형!"}
      <App4Context />
      <br />
      {"11) -----------------------------------------"}
      <br />
      {"immer 라이브러리를 사용해 더 쉽게 불변성 지키기"}
      {/* 
      const object = {
        a: 1,
        b: 2
      };

      //object.b = 3; // 이렇게 값을 직접적으로 고치는건 불변성을 깨뜨리는 행위!
      const nextObject = {
        ...object,
        b: 3
      };
      // 이렇게 spread연산자를 통해 새로운 객체를 만들어 기존의 값을 집어넣고, 새로운 값으로 덮어쓰는게 올바른 방식!
      // --> 컴포넌트가 나중에 제대로 리랜더링되고, 컴포넌트 최적화도 가능해짐

      // 배열도 마찬가지로, .push .splice 를 통한 직접적인 수정은 ㄴㄴ
      // .concat .filter .map 등의 함수를 통해 새로운 배열을 만들어서 작업해야함!

      // 불변성을 지키기 복잡한 코드의 경우에는
      // ** immer 를 사용하면 (yarn add immer)
      // ** --> 불변성을 해치는 코드를 작성해도 대신 불변성을 유지해줌!
       */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
