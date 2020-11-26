import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { loading: true, success: false, error: false };
    case "SUCCESS": //4
      return { loading: false, success: action.data, error: false };
    case "Error":
      return { loading: false, success: false, error: action.error };
    default:
      throw new Error("unhandled action type");
  }
}

export default function useAsync(callback, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    success: false,
    error: false,
  });

  //2
  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await callback(); //3
      dispatch({ type: "SUCCESS", data }); //4
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  //1
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, deps);
  return [state]; //5
}
