import React from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import Counter from "./components/Counter";
import Home from "./components/Home";
import MovieApp from "./components/MovieApp";
import Nav from "./components/Nav";
import TodoApp from "./components/TodoApp";
import "./scss/index.scss";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <TodoApp /> */}
      {/* <MovieApp /> */}

      {/* 리액트는 single page application이기 때문에 따로 링크를 걸어서 페이지를 만들어줘야함! */}

      <Nav />
      <Route path="/" component={Home} exact />
      {/* exact : 정확히 이 주소여야 Home을 띄워주겠다. 예를들어서 localhost:3000/about 하면 Home이랑 같이 뜨지 않게함! */}
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
      <Route path="/movie" component={MovieApp} />
    </>
  );
}

export default App;
