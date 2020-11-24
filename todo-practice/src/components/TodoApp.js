import React, { useState, useEffect } from "react";
import cryptoRandomString from "crypto-random-string";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const initialTodos = [
  // { id:1, title:'아침먹기', done:false }
];
// let id = 0;
export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    // mount 되었을때 실행되는 부분
    console.log("투두앱이 그려졌습니다!", todos);
    return () => {
      // unmount 되었을때 실행되는 부분
      console.log("투두앱이 지워졌습니다.");
    };
  }, [todos]);
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const addTodo = (title) => {
    const newTodo = {
      //   id: id++,
      id: cryptoRandomString({ length: 10 }),
      title,
      done: false,
    };
    // console.log(newTodo);
    // setTodos([...todos, newTodo]);
    setTodos(todos.concat(newTodo)); // 배열에 push 하는것보다 안정적(?)
  };
  // console.log(todos);

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
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

  return (
    <div>
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
    </div>
  );
}
