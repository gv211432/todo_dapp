import React from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import { selectDarkMode } from '../../features/state/gobalState';
import { useSelector } from 'react-redux';
import CloseArrow from "../../assets/close_arrow.png";
import ShowTodo from './components/ShowTodo';
import ShowList from './components/ShowList';
import AddTodo from './components/AddTodo';
import DesktopDisplay from './components/DesktopDisp';
import MobileDisplay from './components/MobileDisplay';
import EditList from './components/EditList';
import EditTodo from './components/EditTodo';

export default function Section1() {
  const darkMode = useSelector(selectDarkMode);

  const mainComponent = () => {
    return <>

      <MobileDisplay />

      <DesktopDisplay />

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
      {/* edit title */}

      <EditList />
      <EditTodo />

    </div>;
  };
  return (
    <LeftRightBars
      mainComponent={mainComponent()}
      rightComponent={rightComponent()}
    />
  );
};
