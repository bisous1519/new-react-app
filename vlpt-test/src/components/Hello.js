import React from "react";

//export default function Hello(props) {
//  return <div style={{ color: props.color }}>{props.name}, 안녕!</div>;
//}
export default function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>*</b>}
      {name}, 안녕!
    </div>
  );
}

Hello.defaultProps = {
  // 기본값 설정
  name: "'이름없음'",
  color: "red",
};
