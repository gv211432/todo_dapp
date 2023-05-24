import React, { useEffect, useState } from 'react';
import CloseArrow from "../../../assets/close_arrow.png";
import EditList from '../components/EditList';
import EditTodo from '../components/EditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import EditAddList from './EditAddList';
import EditAddTodo from './EditAddTodo';

export default function RightSection() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const right_data = useSelector(selectExtra)?.right_data;
  const [state, setState] = useState(null);

  useEffect(() => {
    if (right_data?.type === "todo") {
      setState({
        ...right_data?.data,
        title: right_data?.data?.title,
        body: right_data?.data?.description
      });
    } else if (right_data?.type === "list_title") {
      setState({
        ...right_data?.data,
        title: right_data?.data?.list_name,
      });
    } else if (right_data?.type === "add_list") {
      setState(p => ({
        ...right_data?.data,
        title: "",
        body: ""
      }));
    } else if (right_data?.type === "add_todo") {
      setState(p => ({
        ...right_data?.data,
        title: "",
        body: ""
      }));
    }
  }, [right_data]);

  console.log({ right_data });

  return (
    !right_data ? <div
      className='text-start p-4 f-txt'
    // style={{
    //   color:darkMode ? "#ddd" : ""
    // }}
    >
      Please select todos to show here!
    </div>
      : <div className='text-start pt-2 '>
        <img
          src={CloseArrow}
          alt="close"
          className={`me-2 p-1 basic-icons ${!darkMode && "img-i"}`}
          height={20}
          style={{}}
        />
        <span className='txt'
          style={{
            color: !darkMode ? "#242731" : "#fff",
            verticalAlign: "middle"
          }}>
          {
            (right_data?.type === "todo")
              ? "Edit Todo"
              : (right_data?.type === "list_title")
                ? "Edit List Title"
                : (right_data?.type === "add_list")
                  ? "Add New Todo List"
                  : (right_data?.type === "add_todo")
                    ? "Add Todo" : ""
          }
        </span>
        {/* edit title */}
        {
          (right_data?.type === "todo")
            ? <>
              <EditList state={state} setState={setState} />
              <EditTodo state={state} setState={setState} />
              <div
                style={{ marginBottom: "0.5rem" }}
                className=" d-grid ms-1 me-1 mx-auto" role="group"
                aria-label="Basic checkbox toggle button group">
                <input type="checkbox"
                  class="btn-check"
                  checked={state?.completed}
                  id="btncheck1" autocomplete="off"
                  onChange={() => {
                    setState(p => ({ ...p, completed: !p?.completed }));
                  }}
                />
                <label class="btn f-txt btn-sm btn-outline-success" for="btncheck1"
                // style={{color:"pink"}}
                >{state?.completed
                  ? "Completed"
                  : "Not Completed"}
                </label>
              </div>
            </>
            : (right_data?.type === "list_title")
              ? <>
                <EditList state={state} setState={setState} />
              </> : (right_data?.type === "add_list")
                ? <EditAddList state={state} setState={setState} />
                : (right_data?.type === "add_todo")
                  ? <EditAddTodo state={state} setState={setState} />
                  : null
        }
        <center
          className='text-center mt-2'
        >
          <button
            className={darkMode ? 'btn fade-text' : "btn fade-text-light"}
            style={{ border: "1px solid #666" }}
          >
            Save
          </button>
        </center>

      </div>
  );
}
