import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import CreateUser from "./components/CreateUser";
import Hello from "./components/Hello";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import Wrapper from "./components/Wrapper";

function App() {
  const [inputs, setInputs] = useState({ username: "", email: "" });
  const { username, email } = inputs; // inputs에서 username, email을 미리 추출해주자
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name이 email이었으면 email의 value값을 바꾸고, username이면 username의 value값을 바꿔줌
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "eomji1",
      email: "anipap1@naver.com",
    },
    {
      id: 2,
      username: "eomji2",
      email: "anipap2@naver.com",
    },
    {
      id: 3,
      username: "eomji3",
      email: "anipap3@naver.com",
    },
  ]);

  const nextId = useRef(4); // nextId라는 값을 useRef로 관리하는 이유 : 이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없기때문에!

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]); // 이렇게 해도 됨! push사용하지 x
    setUsers(users.concat(user)); // 이렇게 하게되면 users를 가져와서 그 안에 user를 추가한 새로운 배열을 반환하게됨.

    setInputs({
      username: "",
      email: "",
    });
    //console.log(nextId.current); // 4
    nextId.current += 1; // 바로이때임!! => 컴포넌트가 리렌더링되지 x
  };

  return (
    <>
      <br />
      {"1) -----------------------------------------"}
      <Wrapper>
        <Hello name="엄지" color="royalblue" isSpecial={true} />
        <Hello color="pink" />
        {/* Hello 에서 넘겨준 name, color --> props */}
      </Wrapper>

      <br />
      {"2) -----------------------------------------"}
      <Counter />

      <br />
      {"3) -----------------------------------------"}
      <InputSample />

      <br />
      {"4) -----------------------------------------"}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
