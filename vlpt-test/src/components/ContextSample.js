import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("defaultValue");
// 다른 파일에서 작성할 수도 있고, 다른파일에서 작성한걸 또 다른데서 불러와서 사용할 수도 있음
// ("defaultValue") 라는 기본값은, Provider가 작성되지 않았을 때! 기본값으로 들어가게됨.

function Child() {
  const text = useContext(MyContext);
  // useContext : context에 있는 값을 읽어와서 사용할 수 있게 해주는 react에 내장되어있는 hook!
  return <div>안녕하세요? {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? "GOOD" : "BAD"}>
      {/* MyContext 안에있는 Provider라는 컴포넌트를 통해 value값을 지정해 줄 수 있음.
          이렇게하면 GrandParent에서 이 value값을 쓸 수 있음? */}
      <GrandParent />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
