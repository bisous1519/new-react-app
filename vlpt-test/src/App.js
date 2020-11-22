import React from "react";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import Wrapper from "./components/Wrapper";

function App() {
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
      <UserList />
    </>
  );
}

export default App;
