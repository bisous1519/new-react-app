import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  console.log("CreateUser가 리렌더링됨");
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
//                       : props가 바뀌었을때만 리렌더링 해줌
