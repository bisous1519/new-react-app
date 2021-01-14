import { useState, useCallback } from "react";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }, []); // 의존하는 상태가 없으니까 비워줘도 됨

  const reset = useCallback(() => setForm(initialForm), [initialForm]); // parameter로 가져온걸 사용하고 있으므로 deps안에 작성해줘야함

  return [form, onChange, reset];
}

export default useInputs;
// ==> useInputs를 사용할때는
// 이 함수에서 관리할 form에 대하여
// 초기값을 initialForm으로 받아오고,
// 상태조회는 form으로,
// 이 훅이 반환하는 onChange를 통해 변환하고
// 초기화는 reset을 호출 하면됨!

/*
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      console.log(action);
      //const name = Object.keys(action)[1];
      return {
        ...state,
        [action.name]: action.value,
        // email: action.value
      };
    case "RESET":
      return {};
    default:
      throw new Error("Unhandled Action Type");
  }
}
function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);

  return [form, dispatch];
}

export default useInputs;
*/
