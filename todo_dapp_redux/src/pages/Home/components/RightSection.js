import React, { useEffect, useState } from 'react';
import CloseArrow from "../../../assets/close_arrow.png";
import EditList from '../components/EditList';
import EditTodo from '../components/EditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra } from '../../../features/state/gobalState';

export default function RightSection() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const right_data = useSelector(selectExtra)?.right_data;
  const [state, setState] = useState(null);

  useEffect(() => {
    if (right_data?.type == "todo") {
      setState({
        title: right_data?.data?.title,
        body: right_data?.data?.description
      });
    } else if (right_data?.type == "list_title") {
      setState({
        title: right_data?.data?.list_name,
      });
    }
  }, [right_data]);

  console.log({ right_data });



  return (
    <div className='text-start pt-2 '>
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
          (right_data?.type == "todo")
            ? "Edit Todo"
            : (right_data?.type == "list_title")
              ? "Edit List Title" : ""
        }
      </span>
      {/* edit title */}
      {
        (right_data?.type == "todo")
          ? <>
            <EditList state={state} setState={setState} />
            <EditTodo state={state} setState={setState} />
          </>
          : (right_data?.type == "list_title")
            ? <>
              <EditList state={state} setState={setState} />
            </> : null
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
