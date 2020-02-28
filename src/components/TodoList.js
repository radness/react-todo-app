import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // List 컴포넌트를 사용하기 위해 rowRenderer 함수를 생성한다.
  // react-virtualized의 List 컴포넌트에서 각 TodoItem을 렌더링 할 때 사용되며,
  // 이 함수를 List 컴포넌트의 props로 설정해주어야 합니다.
  // 이 함수는 index, key, style 값을 객체 타입으로 받아와서 사용합니다.
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57}
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 사용하는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outLine 스타일 제거
    />
  );
};

// 컴포넌트 최적화하기.
export default React.memo(TodoList);
