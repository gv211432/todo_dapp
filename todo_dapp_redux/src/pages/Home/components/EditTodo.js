import React from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function EditTodo({ state, setState }) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className="row m-1" style={{
      verticalAlign: "middle",
      maxWidth: "16rem", minWidth: "10rem",
    }} >
      <div className=""
        style={
          {
            background: darkMode ? "#191B20" : "#ddd",
            mixBlendMode: 'normal',
            borderRadius: '12px',
            minHeight: "4rem",
            verticalAlign: "middle",
            paddingTop: "1.3rem"
          }
        }
      >
        <textarea
          className="card-title"
          rows={5}
          style={
            {
              overflowY: "auto",
              fontFamily: '\'Inter\'',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '26px',
              color: '#808191',
              paddingBottom: "1.3rem",
              background: darkMode ? "#191B20" : "#ddd",
              border: "0px",
              width: "100%",
              resize: "none",
              outline: "none"
            }
          }
          value={state?.body}
          onChange={e => {
            setState(p => ({ ...p, body: e?.target?.value }));
          }}
        ></textarea>
      </div>
    </div>
  );
}
