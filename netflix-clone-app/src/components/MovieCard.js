import React from "react";

export default function MovieCard({ item }) {
  return (
    <div className="card__box">
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt="123"
      />
      <div className="card__summary">
        <p>{item.original_title}</p>
        <span>{item.release_date}</span>
        <small>🌟 {item.vote_average} / 10</small>
      </div>
    </div>
  );
}
