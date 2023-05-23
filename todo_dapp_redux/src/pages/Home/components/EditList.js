import React from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function EditList() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className="row m-1" style={{
      verticalAlign: "middle",
      maxWidth:"16rem", minWidth:"10rem",
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
        <h5 className="card-title"
          style={
            {
              fontFamily: '\'Inter\'',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              letterSpacing: '1px',
              color: darkMode ? '#FFFFFF' : "#242731",
              paddingBottom: "1.0rem"
            }
          }
        >List : Things to buy</h5>
      </div>
    </div>

  );
}
