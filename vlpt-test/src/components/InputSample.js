import React, { useState, useRef } from "react";

export default function InputSample() {
  //const [text, setText] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });
  const nameInput = useRef();
  const { name, nickName } = inputs;
  const onChange = (e) => {
    //setText(e.target.value);

    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    //const nextInputs = {
    //  ...inputs,
    //  [name]: value,
    //  cf> [name] --> e.target.name 이 name일때는 input.name에,
    //                 e.target.name 이 nickName일때는 input.nickName에 value 넣어주기
    //};
    // nextInputs[name] = value;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    //setText("");
    setInputs({
      name: "",
      nickName: "",
    });

    nameInput.current.focus();
  };
  return (
    <div>
      {/* <input onChange={onChange} value={text} /> */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {/* {text} */}
        {name} ({nickName})
      </div>
    </div>
  );
}
