import React from 'react';
import ShowTodo from './ShowTodo';
import ShowList from './ShowList';
import AddTodo from './AddTodo';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../../features/state/gobalState';

export default function MobileDisplay() {
  const darkMode = useSelector(selectDarkMode);

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
      <ShowList />
      <AddTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo />
      <ShowTodo />
    </div>
  );
}
