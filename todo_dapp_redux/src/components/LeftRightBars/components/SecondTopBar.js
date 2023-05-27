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
          className={`d-sm-none basic-icons ul-small ${!extra?.hideDrawer && "img-r"} ${darkMode ? "" : "img-i"}`}
          onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
          src={CloseIcon} alt="arrow"
        />
        <div
          height={30}
          className='d-md-inline txt pt-1'
          style={{
            marginTop: "0.4rem",
            marginBottom: "-4rem",
            position: "relative",
            // border: "1px solid blue",
            color: !darkMode ? "#222" : "#fff",
            fontWeight: "600"
          }}
        >
          <span className='show-title'></span>
          {extra?.d_button}
        </div>
        <span className='fade-text-selected ul-small '
          style={{
            margin: "0.2rem",
            padding: "0.3rem",
            paddingBottom: "0.1rem",
          }}
        >
          <Tooltip
            className={`tooltip ${!darkMode ? "fade-text-selected" : "fade-text-light-selected "}`}
            anchorSelect=".tip-top-bar-coins" place="top">
            {extra?.net_data?.symbol} {extra?.balance}
          </Tooltip>
          <motion.img
            whileHover={{
              scale: 1.1
            }}
            className={`ms-2 d-inline pe-2 me-1 mb-1 tip-top-bar-coins`}
            width={35}
            height={25}
            onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
            src={Wallet} alt="arrow"
          />
          <span
            className={`ex-small`}
          >
            {parseInt(extra?.balance).toFixed(2)} {extra?.net_data?.symbol}
          </span>
          <motion.button
            whileHover={{
              scale: 1.04
            }}
            className='ms-2 me-2 ps-2 ps-2 '
            style={
              {
                height: "1.9rem",
                background: '#A3E3FF',
                borderRadius: '5px'
              }}
          ><span
            className='blue-txt'
            style={{
              // border: "1px solid black",
              // marginTop: "-2rem",
            }}
          >
              Tier 1
            </span>
          </motion.button>
        </span>
      </div>
    </div>

  );
}
