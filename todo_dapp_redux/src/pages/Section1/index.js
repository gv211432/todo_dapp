import React from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import { selectDarkMode } from '../../features/state/gobalState';
import { useSelector } from 'react-redux';
import CloseArrow from "../../assets/close_arrow.png";
import ShowTodo from '../Home/components/ShowTodo';
import ShowList from '../Home/components/ShowList';
import AddTodo from '../Home/components/AddTodo';

export default function Section1() {
  const darkMode = useSelector(selectDarkMode);

  const mainComponent = () => {
    return <>
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
    </>;
  };
  const rightComponent = () => {
    return <div className='text-start pt-2 '>
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
        Edit Todo
      </span>
      edit title
    </div>;
  };
  return (
    <LeftRightBars
      mainComponent={mainComponent()}
      rightComponent={rightComponent()}
    />
  );
};
