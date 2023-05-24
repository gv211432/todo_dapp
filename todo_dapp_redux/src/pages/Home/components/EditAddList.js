import React from 'react';
import EditList from './EditList';
import EditTodo from './EditTodo';

export default function EditAddList({ state, setState }) {
  return (
    <div className=''>
      <EditList
        placeholder={"List Title"}
        state={state}
        setState={setState} />
      {/* <EditTodo
        placeholder={"Description"}
        state={state}
        setState={setState} /> */}
    </div>
  );
}
