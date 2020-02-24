import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div>
      <div className="TodoList">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    </div>
  );
};

export default TodoList;
