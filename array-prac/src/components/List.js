import React from "react";
import ListItem from "./ListItem";

const users = [
  { id: 1, userName: "abc", email: "anipap1@naver.com" },
  { id: 2, userName: "abc", email: "anipap2@naver.com" },
  { id: 3, userName: "abc", email: "anipap3@naver.com" },
  { id: 4, userName: "abc", email: "anipap4@naver.com" },
  { id: 5, userName: "abc", email: "anipap5@naver.com" },
];

// users.forEach((v) => {
//   console.log(v);
// });
// forEach는 반환x. 실행만함. 원본배열이 변함.

const newUser = users.map((user, index) => ({
  ...user,
  userName: `엄지${index}`, // "엄지"+index
}));
console.log(newUser);
// map은 값을 변환하여 반환!(원본배열은 변하지 x) -> 새로운 배열을 만들때 사용

export default function List() {
  return (
    <div>
      <h1>리스트목록</h1>
      {/* map을 통해 뭔가 보내줄땐 key를 꼭 같이 보내줘야 성능상.. 등의 이점이 있음 */}
      {users.map((v) => (
        <ListItem user={v} key={v.id} />
      ))}

      {/* key로 쓸만한 애가 너~무 없다 싶을땐 index로 보내도 되긴 됨 */}
      {/* {users.map((v, index) => (
        <ListItem user={v} key={index} />
      ))} */}

      {/*
      <ListItem user={users[0]} />
      <ListItem user={users[1]} />
      <ListItem user={users[2]} />
      <ListItem user={users[3]} />
      <ListItem user={users[4]} />
      */}
    </div>
  );
}
