import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { motion } from 'framer-motion';
export default function ShowList({ title, ...rest }) {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <motion.div
      animate={{
        scale: [0.7, 1]
      }}
      className="row m-1"
      rest
      style={{
        verticalAlign: "middle",
        maxWidth: "16rem", minWidth: "10rem",
      }} >
      <div className="basic-cards"
        onClick={() => dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }))}
        style={
          {
            background: darkMode ? '#242731' : "#8585855a",
            mixBlendMode: 'normal',
            borderRadius: '12px',
            minHeight: "4rem",
            verticalAlign: "middle",
            paddingTop: "1.3rem",
            border: darkMode ? "" : "1px solid grey",
            position: "relative"
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
        >List : {title}</h5>
      </div>
    </motion.div>
  );
}
