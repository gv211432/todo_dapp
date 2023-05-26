import React from 'react';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function ButtonLeft({ Icon, title, show, link }) {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("CLicked");
    dispatch(setExtra({ key: "hideDrawer", val: false }));
    dispatch(setExtra({ key: "d_button", val: title }));
    navigate(link);
  };

  return (
    show
      ? <button
        onClick={(e) => handleClick(e)}
        className={`btn text-start ps-3
        ${!darkMode ? "fade-text-light" : "fade-text"}
        ms-2 
        ${extra.d_button == title
            ? darkMode ? "fade-text-selected" : "fade-text-light-selected"
            : ""} 
        `}
        type="button"
        style={{
          verticalAlign: "middle",
          border: "1px solid #ddd"
        }}>
        <img src={Icon} alt="home"
          className={!extra.hideLeftBar ? `me-sm-0 me-md-1 me-lg-3` : ``}
        />
        <span className={extra?.hideLeftBar ? `ms-3` : `ms-3`}>
          {title}
        </span>
      </button>
      : <button
        onClick={(e) => handleClick(e)}
        className={`btn
            ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} 
            ${!darkMode ? "fade-text-light" : "fade-text"}
            ms-2 
            ${extra.d_button == title
            ? darkMode ? "fade-text-selected" : "fade-text-light-selected"
            : ""} 
            `}
        type="button"
        style={{
          verticalAlign: "middle",
        }}>
        <img src={Icon} alt="home" className={!extra.hideLeftBar ? `me-sm-0 me-md-1 me-lg-3` : ``} />
        <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
          {title}
        </span>
      </button>
  );
}
