import React from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import CloseArrow from "../../assets/close_arrow.png";
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/state/gobalState';
import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';
import ShowList from './components/ShowList';
import AddList from './components/AddList';
import EditTodo from './components/EditTodo';
import EditList from './components/EditList';

export default function Home() {
  const darkMode = useSelector(selectDarkMode);

  const mainComponent = () => {
    return <div>
      <div className='row' >
        {/* list one */}
        <div className='col-lg-4 col-md-6 col-sm-6 overflow-y-scroll'
          style={{
            // overflowY: "scroll"
          }}
        >
          <ShowList />
          <AddTodo />
          <ShowTodo />
          <ShowTodo />
          <ShowTodo />

        </div>

        {/* list two */}
        <div className='col-lg-4 col-md-6 col-sm-6'
          style={{
            // overflowY: "scroll"
          }}
        >
          <ShowList />
          <AddTodo />
          <ShowTodo />

        </div>

        {/* list three */}
        <div className='col-lg-4 col-md-6 col-sm-6'
          style={{
            // overflowY: "scroll"
          }}
        >
          <AddList />
        </div>

      </div>
    </div>;
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
      {/* edit title */}

      <EditList />
      <EditTodo />

    </div>;
  };


  return (
    <>
      <LeftRightBars
        mainComponent={mainComponent()}
        rightComponent={rightComponent()}
      />
    </>
  );
}
