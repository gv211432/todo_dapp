import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import NLogo from "../../../assets/N_logo.png";
// import CloseIcon from "../../../assets/close_icon.png";
// import HomeIcon from "../../../assets/home_icon.png";
// import SectionIcon1 from "../../../assets/section_1.png";
// import SectionIcon2 from "../../../assets/section_2.png";
// import SectionIcon3 from "../../../assets/share.png";
// import LangIcon from "../../../assets/Language.png";
// import MoonIcon from "../../../assets/moon.png";
// import Wallet from "../../../assets/wallet.png";
// import BlueDotIcon from "../../../assets/blue_dot.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra, toggelDarkMode } from '../../../features/state/gobalState';
// import ButtonLeft from './ButtonLeft';
// import LangAndDarkBtn from '../../../pages/Home/components/LangAndDarkBtn';
import { motion } from "framer-motion";
// import { Tooltip } from 'react-tooltip';
// import connetWallet from '../../../helpers/conectWallet';


export default function RightDrawer({ rightComponent }) {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const [deleteDrawer, setDeleteDrawer] = useState(true);

  // this effect generats delay on a state for hiding 
  // and unhiding the drawer
  useEffect(() => {
    if (extra?.hideRightDrawer) {
      setDeleteDrawer(false);
    } else {
      setTimeout(() => {
        setDeleteDrawer(true);
      }, 500);
    }
  }, [extra?.hideRightDrawer]);

  return (
    <motion.div
      // onBlur={() => dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }))}
      className={`${deleteDrawer ? "d-none" : ""} d-sm-none right-drawer`}
      animate={{
        marginRight: extra?.hideRightDrawer ? ["-120%", "-5%"] : ["-2%", "-120%"],
      }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      style={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        right: "0",
        zIndex: "2",
        backgroundColor: darkMode ? "#1E1E1E" : "#eee",
        marginRight: "0rem",
      }}>

      <div class="" style={{
        marginRight: "10px",
        textAlign: "start",
        position: "relative"
      }}>
        {/* <div
        style={{
          position: "absolute",
          zIndex: 10,
          // border: "1px solid black",
          right: "0rem"
        }}
        className='text-end'>
        <img
          // style={{ marginBottom: "-5rem", zIndex:60 }}
          className={`d-sm-inline basic-icons ${extra?.hideRightDrawer && "img-r"} ${darkMode ? "" : "img-i"}`}
          onClick={() => dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }))}
          src={CloseIcon} alt="arrow"
        />
      </div> */}
        <div
          className={""}
          style={{
            // height: "120%",
            // marginTop: "-2.9rem",
            backgroundColor: darkMode ? "#1E1E1E" : "#eee",
            // borderLeft: darkMode ? "5px solid #242731" : "5px solid #888888",
          }}>
          {rightComponent}
        </div>
      </div>
    </motion.div>
  );
}
