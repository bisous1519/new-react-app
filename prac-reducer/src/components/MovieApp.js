import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

const fetchMovieRank = async () => {
  // 어짜피 useAsync 안에 있는 함수로 들어가서 trycatch를 해주기 때문에 여기서는 해줄 필요 x
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=74f9a2f51a30e2eb21c5a7eb362d8937&language=ko-KR&region=KR"
  );
  return response.data;
};

export default function MovieApp() {
  const [state, refetch] = useAsync(fetchMovieRank);
  const { loading, success, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러내용 : {error}</div>;
  if (!success) return null;
  return (
    <>
      <div>THE MOVIE APP</div>
      <div>
        {success.results.map((v) => (
          <h3>{v.title}</h3>
        ))}
      </div>
    </>
  );
}
