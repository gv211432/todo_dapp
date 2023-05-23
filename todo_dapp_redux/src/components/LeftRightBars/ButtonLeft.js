import React from 'react';
import { selectDarkMode, selectExtra } from '../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function ButtonLeft({ Icon, title, show }) {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);

  return (
    show ?
      <button
        class={`btn text-start ps-3
        ${!darkMode ? "fade-text-light" : "fade-text"}
        ms-2`}
        type="button"
        style={{
          verticalAlign: "middle",
          border:"1px solid #ddd"
        }}>
        <img src={Icon} alt="home"
          className={!extra.hideLeftBar ? `me-sm-0 me-md-1 me-lg-3` : ``}
        />
        <span className={extra?.hideLeftBar ? `ms-3` : `ms-3`}>
          {title}
        </span>
      </button>
      :
      <button
        class={`btn
            ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} 
            ${!darkMode ? "fade-text-light" : "fade-text"}
            ms-2`}
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
