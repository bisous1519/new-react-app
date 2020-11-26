import React from "react";
import { FcFilmReel } from "react-icons/fc";
import axios from "axios";
import useAsync from "../hooks/useAsync";
import "../scss/main.scss";
import MovieCard from "./MovieCard";

async function getMovie() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=74f9a2f51a30e2eb21c5a7eb362d8937&language=ko-KR&region=KR"
  );
  return response.data;
}

export default function MovieApp() {
  const [state] = useAsync(getMovie);
  const { loading, success: data, error } = state; // success를 data로 받아온다
  console.log(data);

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return null;
  return (
    <>
      <h1 className="app__title">
        <span>MOVIEAPP</span>
        <i>
          <FcFilmReel />
        </i>
      </h1>
      <div className="card__wrapper">
        {data.results.map((item) => (
          <MovieCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
