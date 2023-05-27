import React, { useCallback, useEffect, useMemo, useState } from 'react';
import OvalBag from "../../../assets/Oval_bag.png";
import EditPen from "../../../assets/edit_pen.png";
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';

export default function ShowTodo({ title, description, completed,
  index, listName, i, j }) {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const isSelected = useMemo(() => {
    if (extra?.right_data && extra?.right_data?.type === "todo") {
      // console.log("Cheking=>", extra?.right_data);
      if (extra?.right_data?.data?.index == index) return true;
    }
    return false;
  }, [extra]);

  // console.log({ isSelected });

  return (
    <motion.div
      animate={{
        scale: [0.7, 1]
      }}
      className={`row m-1 ${isSelected ? "show-todos" : ""}`}
      style={{
        maxWidth: "20rem", minWidth: "10rem",
      }}>
      <div className="card-body"
        style={{
          background: darkMode ? "#191B20" : "#ddd",
          opacity: "0.8",
          borderRadius: "16px",
          position: "relative"
        }}
      >
        {/* <div
          style={
            {
              width: '4px',
              // height: '102px',
              background: '#000AFF',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '16px',
              marginLeft: "-28.6rem"
            }}
        >
        </div> */}
        <div style={{ position: "absolute", right: "0.3rem", top: "0.4rem" }} >
          {/* <Tooltip
            className={`tooltip ${!darkMode ? "fade-text-selected" : "fade-text-light-selected "}`}
            anchorSelect={`.tip-show-todos-${i}-${j}`} place="top">
            Edit Todo
          </Tooltip> */}
          <img src={EditPen} alt="oval_bag"
            className={`tip-show-todos-${i}-${j} me-2 rounded rounded-circle basic-icons ${i}_${j}`}
            height={30}
            style={{
              backgroundColor: "#30343d"
            }}
            onClick={() => {
              dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }));
              dispatch(setExtra({
                key: "right_data", val: {
                  type: "todo",
                  data: {
                    title,
                    description,
                    completed,
                    index,
                    listName
                  }
                }
              }));
            }}
          />
        </div>
        <h5 className="card-title text-start me-3" style={
          {
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "24px",
            color: darkMode ? "#fff" : "#444549",
          }
        }>
          <img
            src={OvalBag} alt="oval_bag"
            className='me-2' height={30}
          />
          <span className='ps-1'>
            {title}
          </span>
        </h5>
        <h6 className="card-subtitle"
          style={
            {
              fontFamily: '\'Inter\'',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '26px',
              color: '#808191'
            }
          }>
          {description}
        </h6>
        {completed && <div style={{ position: "absolute", right: "0.8rem", bottom: "0.4rem" }} >
          <FontAwesomeIcon
            width={20}
            height={20}
            color='#fff'
            className='text-success'
            icon="fa-solid fa-check"
          />
        </div>}
      </div>
    </motion.div>);
}
