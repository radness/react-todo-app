import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    // TodoListItem-virtualized 컴포넌트를 만든 이유는 컴포넌트 사이에 테두리를 보여주고,
    // 홀수 번째 / 짝수 번째 다른 배경 색상을 설정하기 위해서입니다.
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {/* TodoListItem 컴포넌트에서 받아온 todo 값에 따라 UI를 보여준다. */}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

// export default TodoListItem;
// todo, onRemove, onToggle 이 변경되지 않으면 리렌더링을 하지 않습니다.
// export default React.memo(TodoListItem);
export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
