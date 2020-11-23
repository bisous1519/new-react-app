import React, { useState } from "react";
import cryptoRandomString from "crypto-random-string";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

const initialTodos = [
  // { id:1, title:'아침먹기', done:false }
];
// let id = 0;
export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (title) => {
    const newTodo = {
      //   id: id++,
      id: cryptoRandomString({ length: 10 }),
      title,
      done: false,
    };
    // console.log(newTodo);
    // setTodos([...todos, newTodo]);
    setTodos(todos.concat(newTodo));
  };
  // console.log(todos);

  const removeTodo = (id) => {
    // console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    // todos 배열의 하나하나를 차례로 실행하는데, 오른쪽 조건에 만족하는것 만으로 걸러냄
    // 뭔가를 반복할때 / 수정할때 : map
    // 뭔가를 지울때 : filter
  };

  return (
    <div>
      {/* <TodoItem /> */}
      {todos.map((todo) => (
        <TodoItem todo={todo} removeTodo={removeTodo} key={todo.id} />
      ))}
      <TodoCreator addTodo={addTodo} />
    </div>
  );
}
