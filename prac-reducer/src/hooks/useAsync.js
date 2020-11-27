import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        success: false,
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        success: action.data,
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        success: false,
        error: action.error,
      };
    default:
      throw new Error("Unhandled Action Type");
  }
}

export default function useAsync(axiosFunc) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    success: false,
    error: false,
  });

  // useEffect는 비동기가 안되기 때문에 비동기 요청을 처리할 수 있는 함수를 따로 만듦 --> fetchData()
  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await axiosFunc();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };
  useEffect(() => {
    // 컴포넌트가 마운트 되면 fetchData 실행
    fetchData();
  }, []);

  return [state, fetchData];
}
