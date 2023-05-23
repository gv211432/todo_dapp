import React from 'react';
import ShowTodo from './ShowTodo';
import ShowList from './ShowList';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function DesktopDisplay() {
  const darkMode = useSelector(selectDarkMode);
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

        <div
          className=''
          style={{
            width: "15rem",
            margin: "0.1rem",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          }}>
          <ShowList />
          <ShowTodo />
          <ShowTodo />
        </div>

        <div
          className=''
          style={{
            width: "15rem",
            margin: "0.1rem",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          }}>
          <ShowTodo />
          <ShowTodo />
        </div>


        <div
          className='p-1'
          style={{
            width: "16rem",
            margin: "0.1rem",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
          }}>
          <ShowList />
          <ShowTodo />
          {/* <ShowTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo /> */}
          <ShowTodo />
        </div>



        <div
          className='p-1'
          style={{
            width: "16rem",
            margin: "0.1rem",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
          }}>
          <ShowList />
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />
        </div>

        <div
          className=''
          style={{
            width: "15rem",
            margin: "0.1rem",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          }}>
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />
        </div>



      </div>
    </div>
  );
}
