import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav__box">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about" activeStyle={{ textDecoration: "underline" }}>
        {/*    ={`/about${변수}`} */}
        ABOUT
      </NavLink>
      <NavLink to="/counter" activeStyle={{ textDecoration: "underline" }}>
        COUNTER
      </NavLink>
      <NavLink to="/movie" activeStyle={{ textDecoration: "underline" }}>
        MOVIE
      </NavLink>
      <NavLink to="/movie/eomji" activeStyle={{ textDecoration: "uunderline" }}>
        Detail
      </NavLink>
      {/* 네비게이션에 스타일을 주고싶으면 NavLink 로 하면됨! Link말고! */}
    </nav>
  );
}
