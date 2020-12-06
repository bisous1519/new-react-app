import React from "react";
import axios from "axios";
import useAsync from "../hooks/useAsync";

export default function Detail({ history, match, location }) {
  //   console.log(history, match, location);
  async function fetchDetail() {
    const response = await axios.get(
      `http://api.themoviedb.org/3/movie/${match.params.id}?api_key=74f9a2f51a30e2eb21c5a7eb362d8937&language=ko-KR`
    );
    return response.data;
  }
  const [state] = useAsync(fetchDetail);
  const { loading, success, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!success) return null; // 로그인유저가 없었을 때 안전장치 걸었던것 처럼!
  console.log(success);

  return (
    <div className="detail__container">
      <div className="img__wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${success.backdrop_path}`}
          alt=""
        />
        <div className="detail__title">
          <h1>{success.original_title}</h1>
          <button>▶ PLAY</button>
        </div>
      </div>
      <div className="summary">
        <h1>{success.tagline}</h1>
        <div className="summary__more">
          <h1>{success.overview}</h1>
          <h1>
            {success.genres[0].name}/
            {success.genres[1] && success.genres[1].name}
          </h1>
          <h1>{success.production_companies[0].name}</h1>
        </div>
        <button>더보기</button>
      </div>
    </div>
  );
}

// CSS in JS
// -> styled-components
// -> emotion
