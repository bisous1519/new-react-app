import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem({ item }) {
  return (
    <Link to={`/movie/${item.id}`} className="item__wrapper">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.id}
      />
      <div className="summary">
        <h1>{item.original_title}</h1>
        <span>{item.release_date}</span>
      </div>
      <div className="score">
        <h1>{item.vote_average}</h1>
      </div>
    </Link>
  );
}
