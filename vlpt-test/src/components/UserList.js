import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      {/* user.map((user, index) => (~~))
          ㄴ> index를 사용해서 key를 하는건 피하는게 좋음 */}

      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}

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

// useRef로 관리하는 값은, 바뀌어도 컴포넌트가 리렌더링 되지 x!
// 사용 : setTimeout, setInterval의 id / 외부라이브러리를 사용하여 생성된 인스턴스 / Scroll 위치 / ..
