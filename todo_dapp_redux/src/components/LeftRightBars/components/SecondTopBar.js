import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from "../../../assets/close_icon.png";
import Wallet from "../../../assets/wallet.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';


export default function SecondTopBar() {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <div className='container text-start'
    >
      <div className='d-flex justify-content-between'>
        <img
          className={`d-sm-none basic-icons ${!extra?.hideDrawer && "img-r"} ${darkMode ? "" : "img-i"}`}
          onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
          src={CloseIcon} alt="arrow"
        />
        <span
          height={30}
          className='d-md-inline txt pt-1'
          style={{
            paddingBottom: "-1rem",
            borderBottom: "5px solid blue",
            color: !darkMode ? "#222" : "#fff",
            fontWeight: "600"
          }}
        >
          {extra?.d_button}
        </span>
        <span>
          <img
            className={`d-inline pt-2 pe-2 basic-icons`}
            width={40}
            height={40}
            onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
            src={Wallet} alt="arrow"
          />
          <motion.button
            whileHover={{
              scale: 1.1
            }}
            className='mt-2 me-2 btn-sm btn ps-2 pe-2'
            style={
              {
                background: '#A3E3FF',
                borderRadius: '5px'
              }}
          ><span className='blue-txt'>
              Tier 1
            </span>
          </motion.button>
        </span>
      </div>
    </div>

  );
}
