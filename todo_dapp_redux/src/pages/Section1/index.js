import React from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import { selectDarkMode } from '../../features/state/gobalState';
import { useSelector } from 'react-redux';
import CloseArrow from "../../assets/close_arrow.png";

export default function Section1() {
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

        </div>

        {/* list two */}
        <div className='col-lg-4 col-md-6 col-sm-6'
          style={{
            // overflowY: "scroll"
          }}
        >

        </div>

        {/* list three */}
        <div className='col-lg-4 col-md-6 col-sm-6'
          style={{
            // overflowY: "scroll"
          }}
        >
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

    </div>;
  };
  return (
    <LeftRightBars
      mainComponent={mainComponent()}
      rightComponent={rightComponent()}
    />
  );
};
