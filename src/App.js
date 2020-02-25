import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수를 담는다.
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = { id: nextId.current, text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nexId에 1씩 더해준다.
    },
    [todos],
  );

  // 배열 내장 함수 filter
  // filter 함수는 기존의 배열은 그대로 둔 상태에서 특정 조건을 만족하는 원소들만
  // 따로 추출하여 새로운 배열을 만들어줍니다.
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const biggerThanFive = array.filter(number => number > 5);
  // console.log(biggerThanFive);

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
