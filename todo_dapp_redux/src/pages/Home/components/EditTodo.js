import React from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const MIN_TEXTAREA_HEIGHT = 32;
const MAX_TEXT_HEIGHT = 120;
const ALLOWED_CONTENT_LEN = 150;
export default function EditTodo({ state, setState, placeholder, style }) {
  const darkMode = useSelector(selectDarkMode);

  return (
    <motion.div
      animate={{
        scale: [0.7, 1]
      }}
      className="row m-1" style={{
        verticalAlign: "middle",
        maxWidth: "30rem", minWidth: "10rem",
      }} >
      <div className=""
        style={
          {
            ...style,
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
          placeholder={placeholder}
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
            if (e.target?.value?.length > ALLOWED_CONTENT_LEN) return;
            setState(p => ({ ...p, body: e?.target?.value }));
          }}
        ></textarea>
      </div>
    </motion.div>
  );
}
