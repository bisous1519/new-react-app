import React, { useContext, useEffect } from "react";
import { UserDispatch } from "./App3";

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext();
  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);

    //console.log("컴포넌트가 화면에 나타남");
    // 컴포넌트가 마운트될 때 주로 수행하는 작업들 ㄱ
    //  - props -> state  (props로 받은 값을 컴포넌트의 state로 설정)
    //  - REST API  (컴포넌트가 나타날 때 REST API와 같은 외부의 API 요청)
    //  - D3, Video.js  (~ 등의 라이브러리를, 컴포넌트가 마운트될 때 사용하도록 하고 싶을 때)
    //  - setInterval, setTimeout  (~과 같은 처리)
    //
    // 컴포넌트가 화면에 마운트 된! 직후 실행. (따라서 DOM에 직접 접근해도 무방)

    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);

      //console.log("컴포넌트가 화면에서 사라짐");
      // 컴포넌트가 언마운트될 때 주로 수행하는 작업들
      // - clearIntervla, clearTimeout
      // - 라이브러리 인스턴스 제거
    };
  }, [user]); // deps 배열이 비워있는 상태 [] 로 두면 : 컴포넌트가 처음 화면에 나타날 때에만 실행됨.
  // useEffect의 함수는 [user]의 값이 설정(마운트)되거나 바뀔때 마다 호출됨
  return (
    <div>
      <b
        style={{ color: active ? "green" : "black", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

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

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);

// useRef로 관리하는 값은, 값이 바뀌어도 컴포넌트가 리렌더링 되지 x!
// 사용 : setTimeout, setInterval의 id / 외부라이브러리를 사용하여 생성된 인스턴스 / Scroll 위치 / ..

// 컴포넌트를 최적화하는 방법
// - 연산된 값을 재사용 : useMemo
// - 특정 함수를 재사용 : useCallback  (-> 꼭 성능이 좋아지는건 아님)
// - 컴포넌트 렌더링된 결과물을 재사용 : React.memo
// but, 무작위로 모든 컴포넌트에 재사용하겠다고 써붙이면 오히려 코드가 더 많이 실행되는 경우가 생기면서 성능이 더 안좋아질 수 있음!
//      따라서 "진짜 이건 쓰면 최적화가 되겠다! 필요하겠다!" 싶을때 구현하면 됨! ? 이 뭔소릴까 ㅋㅋㅋㅋㅋㅋㅋㅋ
