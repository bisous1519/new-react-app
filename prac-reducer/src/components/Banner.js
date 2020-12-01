import React from "react";

export default function Banner({ item }) {
  return (
    <div className="banner__box inner">
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
      />
      <div className="summary">
        <h1>TITLE</h1>
        <p>~~~</p>
        <span>평점</span>
      </div>
    </div>
  );
}
