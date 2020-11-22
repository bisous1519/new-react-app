import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
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
  ];
  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
      {/* <div>
        <b>{users[0].username}</b>
        <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b>
        <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b>
        <span>({users[2].email})</span>
      </div> */}
    </div>
  );
}

export default UserList;
