import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, toggelDarkMode } from '../../../features/state/gobalState';

export default function LangAndDarkBtn({
  LangIcon,
  MoonIcon,
  BlueDotIcon
}) {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <div
      className='text-start d-sm-block d-md-block ms-3 mb-3 text-sm-center'
      style={{ marignTop: "" }} >
      <img src={LangIcon} height={26} width={26}
        alt="home"
        className={"basic-icons me-2"}
        style={{ marginTop: "-0.3rem" }}
      />
      <br className='d-md-none' />
      <div
        className=""
        style={{
          display: "inline-block", width: "4rem",
          marginLeft: extra?.hideLeftBar ? "-1rem" : "",
          marginTop: "0.3rem"
        }}>
        <span className='p-1'
          style={{
            backgroundColor: darkMode ? "#353945" : "#ccc",
            borderRadius: "20px"
          }}>
          <img src={MoonIcon}
            height={18} width={18}
            style={{ margin: "-0.4rem -0.2rem auto 0.2rem" }}
            alt="home"
            className=''
          />
          <img src={BlueDotIcon}
            height={37} width={37}
            alt="home"
            className={darkMode
              ? "basic-icons dark-btn-on"
              : "basic-icons dark-btn-off"}
            onClick={() => dispatch(toggelDarkMode())}
          />
        </span>
      </div>
    </div>
  );
}
