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

  return (
    <div
      className='d-none d-sm-none d-md-block'
      style={{
        backgroundColor: darkMode ? "" : "",
        position: "relative",
        margin: "0",
        padding: "0",
        overflowX: "auto",
        overflowY: "hidden",
        height: "88%"
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
              key={"dd-" + i}
              style={{
                width: "17rem",
                margin: "0.2rem",
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
              <AddTodo list={list} key={list?.list_name} />
              {list?.data?.map((todo, j) => {
                return <ShowTodo
                  key={"dd_sub_" + j}
                  title={todo?.title} description={todo?.desc}
                  completed={todo?.done} index={todo?.index}
                  listName={list?.list_name}
                  i={i} j={j}
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
