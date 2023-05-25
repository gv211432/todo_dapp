import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import OvalBag from "../../../assets/Oval_bag.png";
import PlusIcon from "../../../assets/plus.png";
import { motion } from 'framer-motion';

export default function AddTodo({ list }) {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <motion.div
      animate={{
        scale: [0.7, 1]
      }}
      className={`row m-1`}
      style={{ maxWidth: "16rem", minWidth: "10rem" }}
    >
      <div className="card-body"
        style={{
          "background": darkMode ? "#191B20" : "#ddd",
          "opacity": "0.8", "borderRadius": "16px",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", right: "0.3rem", top: "0.4rem" }} >
          <img src={PlusIcon} alt="oval_bag"
            className='me-2 p-2 basic-icons rounded rounded-circle' height={30}
            style={{
              backgroundColor: "#30343d"
            }}
            onClick={() => {
              dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }));
              dispatch(setExtra({
                key: "right_data",
                val: {
                  type: "add_todo",
                  data: { list }
                }
              }));
            }}
          />
        </div>

        <h5 className="card-title text-start" style={
          {
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "24px",
            color: darkMode ? "#6E6E6E" : "#858585e1",
            marginTop: ""
          }
        }>
          <img src={OvalBag} alt="oval_bag" className='me-2' height={30} />
          Add Todo
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
          Add todo description
        </h6>
      </div>
    </motion.div>
  );
}
