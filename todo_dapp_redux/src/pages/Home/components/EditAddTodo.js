import React from 'react';
import EditList from './EditList';
import EditTodo from './EditTodo';

export default function EditAddTodo({ state, setState }) {
  // console.log({ addTodoState: state });
  return (
    <div className=''>
      <EditList
        placeholder={"Todo Title"}
        state={state}
        setState={setState} />
      <EditTodo
        placeholder={"Description"}
        state={state}
        setState={setState} />
      {/* <div
        style={{ marginBottom: "0.5rem" }}
        className=" d-grid ms-1 me-1 mx-auto" role="group"
        aria-label="Basic checkbox toggle button group">
        <input type="checkbox"
          class="btn-check" id="btncheck1" autocomplete="off" />
        <label class="btn f-txt btn-sm btn-outline-success" for="btncheck1"
        // style={{color:"pink"}}
        >Completed</label>
      </div> */}

      {/* <span className='f-txt ms-2'>
        List : {state?.list?.list_name}
      </span> */}

    </div>
  );
}
