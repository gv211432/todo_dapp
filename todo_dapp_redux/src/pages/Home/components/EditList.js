import React, { useLayoutEffect, useRef, useState } from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const MIN_TEXTAREA_HEIGHT = 32;
const MAX_TEXT_HEIGHT = 120;
const ALLOWED_CONTENT_LEN = 150;
export default function EditList({ state, setState, placeholder, style, disabled = false }) {
  const darkMode = useSelector(selectDarkMode);
  const [pvtState, setPvtState] = useState(null);
  const textareaRefHeading = React.useRef(null);
  const listContentRef = useRef("");

  useLayoutEffect(() => {
    if (state?.title?.length < listContentRef.current?.length) {
      setPvtState(p => ({ ...p, overflowHead: false }));
      textareaRefHeading.current.style.height = "inherit";
    } else if (parseInt(textareaRefHeading.current?.style.height) > MAX_TEXT_HEIGHT) {
      setPvtState(p => ({ ...p, overflowHead: true }));
      return;
    }
    textareaRefHeading.current.style.height = `${Math.max(
      textareaRefHeading.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
    listContentRef.current = state?.title;
  }, [state]);

  return (
    <motion.div
      animate={{
        scale: [0.7, 1]
      }}
      className="row m-1" style={{
        verticalAlign: "middle",
        maxWidth: "30rem", minWidth: "10rem",
      }} >
      <div className="edit-list-card"
        style={
          {
            background: darkMode ? '#242731' : "#8585855a",
            border: darkMode ? "" : "1px solid grey",
          }
        }
      >
        <textarea
          ref={textareaRefHeading}
          rows={1}
          className="card-title edit-list-input"
          disabled={disabled}
          style={
            {
              ...style,
              color: darkMode ? '#FFFFFF' : "#242731",
              background: darkMode ? '#242731' : "#c9c9c9",
              overflow: "hidden",
              overflowY: (pvtState?.overflowHead) ? "scroll" : "hidden",
              // paddingBottom: "1.0rem"
            }
          }
          placeholder={placeholder}
          value={state?.title}
          onChange={e => {
            if (e.target?.value?.length > ALLOWED_CONTENT_LEN) return;
            setState(p => ({ ...p, title: e.target.value }));
          }}
        />
      </div>
    </motion.div>

  );
}
