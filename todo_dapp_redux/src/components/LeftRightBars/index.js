import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode } from '../../features/state/gobalState';
import LeftDrawer from './components/LeftDrawer';
import RightDrawer from './components/RightDrawer';
import TopHorizontalBar from './components/TopHorizontalBar';
import LeftVerticalBar from './components/LeftVerticalBar';
import SecondTopBar from './components/SecondTopBar';


export default function LeftRightBars({ mainComponent, rightComponent }) {

  const darkMode = useSelector(selectDarkMode);

  return (
    <div style={{ height: "100vh" }}>
      {/* top blue bar secition */}
      <TopHorizontalBar />

      {/* main content section */}
      <center style={{ height: "100%" }}>
        <div className='row' style={{ height: "100%" }}>
          {/* left section */}
          <LeftVerticalBar />

          {/* Main section */}
          <div className='col' style={{ height: "100%" }}>
            <div className='row'
              style={{
                height: "3rem",
                borderBottom: darkMode ? "3px solid #242731" : "3px solid #888888",
                backgroundColor: darkMode ? "#1E1E1E" : "#eee",
              }}>
              {/* top bar main seciton */}
              <SecondTopBar />
              {/* left drawer */}
              <LeftDrawer />
              {/* Right drawer */}
              <RightDrawer rightComponent={rightComponent} />
            </div>

            {/*========== this is middle and right section========== */}
            <div className='row' style={{ height: "100%" }}>
              {/* main of main right section */}
              <div className='col-lg-9 col-md-8 col-sm-12' style={{
                height: "100%",
                backgroundColor: darkMode ? "#1E1E1E" : "#eee",
              }}>
                {mainComponent}
              </div>
              {/* right of main right section */}
              <div
                className='d-none d-md-block d-lg-block col-sm-0 col-md-4 col-lg-3'
                // className='d-none col'
                style={{
                  height: "100%",
                  backgroundColor: darkMode ? "#1E1E1E" : "#eee",
                  borderLeft: darkMode ? "5px solid #242731" : "5px solid #888888"
                }}>
                {rightComponent}
              </div>
            </div>
          </div>
        </div>
      </center >
    </div >
  );
}
