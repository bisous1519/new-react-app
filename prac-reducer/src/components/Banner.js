import React from "react";

export default function Banner({ item }) {
  return (
    <div className="banner__box inner">
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
      />
      <div className="summary">
        <article>
          <h1>{item.original_title}</h1>
          <p>{item.release_date}</p>
          <span>
            🌟<strong>{item.vote_average}</strong>/10
          </span>
        </article>
      </div>
    </div>
  );
}
