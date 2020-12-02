import React, { useEffect } from "react";

export default function About({ history, match, location }) {
  const goBack = () => {
    history.goBack();
    // 뒤로가기
  };
  const goHome = () => {
    history.push("/");
  };
  useEffect(() => {
    const unblock = history.block("정말 나갈거야?");
    return () => {
      // 컴포넌트가 언마운트될때 실행됨
      unblock();
    };
  }, [history]);
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <h1 className="section__title">이 홈페이지는 무비앱과 카운터가 있어요</h1>
      <h1 className="section__title">bisous1519</h1>
      <h1 className="section__title">https://github.com/bisous1519</h1>
    </div>
  );
}
