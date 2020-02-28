import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: 1,
      text: `Todo ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

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

  const onToggle = useCallback(
    id => {
      setTodos(
        // 배열의 내장함수 map을 사용하여 특정 id를 가지고 있는 객체의 checked값을 반전시켜줍니다.
        // 불변성을 유지하면서 특정 배열 원소를 업데이트 해야할 때 map을 사용하면 쉽게 작성할 수 있습니다.
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
