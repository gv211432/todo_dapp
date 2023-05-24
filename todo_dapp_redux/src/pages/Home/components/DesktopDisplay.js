import React from 'react';
import ShowTodo from './ShowTodo';
import ShowList from './ShowList';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';
import AddList from './AddList';
import AddTodo from './AddTodo';

export default function DesktopDisplay() {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const todoData = extra?.list_data;
  console.log({ todoData });

  return (
    <div
      className='d-none d-sm-none d-md-block'
      style={{
        backgroundColor: darkMode ? "" : "#eee",
        position: "relative",
        margin: "0",
        padding: "0",
        overflowX: "auto",
        overflowY: "hidden",
        height: "100%"
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          maxWidth: "10000px",
          height: "100%",
        }}>

        {
          todoData?.map((list, i) => {
            return <div
              className=''
              style={{
                width: "17rem",
                margin: "0.1rem",
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden"
              }}>
              <div onClick={() => dispatch(setExtra({
                key: "right_data", val: {
                  type: "list_title",
                  data: list
                }
              }))}>
                <ShowList title={list?.list_name} />
              </div>
              <AddTodo list={list} />
              {list?.data?.map((todo, j) => {
                return <ShowTodo title={todo?.title} description={todo?.desc}
                  completed={todo?.done}
                />;
              })}
              <br />
              <br />
              <br />
            </div>;
          })
        }
        <div
          className=''
          style={{
            width: "17rem",
            margin: "0.1rem",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          }}>
          <AddList />
        </div>
      </div>
    </div>
  );
}
