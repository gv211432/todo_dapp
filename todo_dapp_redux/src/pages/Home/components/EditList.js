import React from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function EditList({ state, setState, placeholder, style }) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className="row m-1" style={{
      verticalAlign: "middle",
      maxWidth: "16rem", minWidth: "10rem",
    }} >
      <div className="edit-list-card"
        style={
          {
            background: darkMode ? '#242731' : "#8585855a",
            border: darkMode ? "" : "1px solid grey",
          }
        }
      >
        <textarea className="card-title edit-list-input"
          style={
            {
              ...style,
              color: darkMode ? '#FFFFFF' : "#242731",
              background: darkMode ? '#242731' : "#c9c9c9",
              // paddingBottom: "1.0rem"
            }
          }
          placeholder={placeholder}
          value={state?.title}
          onChange={e => {
            setState(p => ({ ...p, title: e.target.value }));
          }}
        />
      </div>
    </div>

  );
}
