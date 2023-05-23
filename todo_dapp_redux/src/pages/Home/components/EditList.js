import React from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function EditList({ state, setState }) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className="row m-1" style={{
      verticalAlign: "middle",
      maxWidth: "16rem", minWidth: "10rem",
    }} >
      <div className=""
        style={
          {
            background: darkMode ? '#242731' : "#8585855a",
            mixBlendMode: 'normal',
            borderRadius: '12px',
            minHeight: "4rem",
            verticalAlign: "middle",
            paddingTop: "1.3rem",
            position: "relative",
            border: darkMode ? "" : "1px solid grey"
          }
        }
      >
        <textarea className="card-title"
          style={
            {
              fontFamily: '\'Inter\'',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              width: "inherit",
              border: "0px",
              resize: "none",
              letterSpacing: '1px',
              color: darkMode ? '#FFFFFF' : "#242731",
              background: darkMode ? '#242731' : "#c9c9c9",
              outline: "none",
              // paddingBottom: "1.0rem"
            }
          }
          value={state?.title}
          onChange={e => {
            setState(p => ({ ...p, title: e.target.value }));
          }}
        />
      </div>
    </div>

  );
}
