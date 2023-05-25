import React from 'react';
import ShowTodo from './ShowTodo';
import ShowList from './ShowList';
import AddTodo from './AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import AddList from './AddList';

export default function MobileDisplay() {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const todoData = extra?.list_data;

  return (
    <div
      className='container d-sm-block d-md-none'
      style={{
        backgroundColor: darkMode ? "" : "#eee",
        position: "relative",
        margin: "0",
        padding: "0",
        overflowY: "auto",
        overflowX: "hidden",
        height: "100%"
      }}
    >
      {/* <ShowList />
      <AddTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo /> */}

      {
        todoData?.map((list, i) => {
          return <div
            className=''
            key={"dd-" + i}
            style={{
              margin: "0.1rem",
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
              return <ShowTodo
                key={"dd_sub_" + j}
                title={todo?.title} description={todo?.desc}
                completed={todo?.done} index={todo?.index}
                listName={list?.list_name}
              />;
            })}
            <br />
          </div>;
        })
      }
      <AddList />
    </div>
  );
}
