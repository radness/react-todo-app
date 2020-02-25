import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// 버튼을 클릭하면 발생하는 이벤트: onInsert
const TodoInsert = ({ onInsert }) => {
  // 인풋에 입력하는 값을 관리할 수 잇도록 useState를 사용하여 value라는 상태를 정의.
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  // props로 받아온 onInsert 함수에 현재 value값을 파라미터로 넣어서 호출하고,
  // 현재 value 값을 초기화합니다.
  // onSubmit 이벤트는 브라우저를 새로고침 시킵니다.
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값을 초기화해준다.

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 e.preventDefault() 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
