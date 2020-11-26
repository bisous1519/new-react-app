import React, { useState, useEffect } from "react";
import cryptoRandomString from "crypto-random-string";
import axios from "axios";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";
import ErrorPage from "./ErrorPage";

const initialTodos = [
  // { id:1, title:'아침먹기', done:false }
];

// let id = 0;
export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    ///   async : 비동기함수!
    ///   await : 결과 제대로 받아올때까지 기다리자
    ///   try catch : 비동기 처리를 해주려면 try catch 필요

    try {
      setError(null);
      setSuccess(null);
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos2"
      );
      setSuccess(response.data);
      setTodos(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    //console.log("투두앱이 그려졌습니다!");
    fetchTodos();
  }, []);
  // useEffect(() => {
  //   effect     // mount 되었을때 실행되는 부분
  //   return () => {
  //     cleanup  // unmount 되었을때 실행되는 부분
  //   }
  // }, [input])

  const addTodo = (title) => {
    const newTodo = {
      //   id: id++,
      id: cryptoRandomString({ length: 10 }),
      title,
      completed: false,
    };
    // console.log(newTodo);
    // setTodos([...todos, newTodo]);
    setTodos(todos.concat(newTodo)); // 배열에 push 하는것보다 안정적(?)
  };
  // console.log(todos);

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    // console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    // todos 배열의 하나하나를 차례로 실행하는데, 오른쪽 조건에 만족하는것 만으로 걸러냄 -> 이렇게 만들어진 새로운 배열을 반환함
    // 뭔가를 반복할때 / 수정할때 : map
    // 뭔가를 지울때 : filter
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <ErrorPage />;
  if (!success) return null;

  return (
    <>
      <TodoCreator addTodo={addTodo} />
      {/* <TodoItem /> */}
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          removeTodo={removeTodo}
          onToggle={onToggle}
          key={todo.id}
        />
      ))}
    </>
  );
}
