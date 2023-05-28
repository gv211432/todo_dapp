import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NLogo from "../../../assets/N_logo.png";
import CloseIcon from "../../../assets/close_icon.png";
import HomeIcon from "../../../assets/home_icon.png";
import SectionIcon1 from "../../../assets/section_1.png";
import SectionIcon2 from "../../../assets/section_2.png";
import SectionIcon3 from "../../../assets/share.png";
import LangIcon from "../../../assets/Language.png";
import MoonIcon from "../../../assets/moon.png";
import Wallet from "../../../assets/wallet.png";
import BlueDotIcon from "../../../assets/blue_dot.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra, toggelDarkMode } from '../../../features/state/gobalState';
import ButtonLeft from './ButtonLeft';
import LangAndDarkBtn from './LangAndDarkBtn';
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import connetWallet from '../../../helpers/conectWallet';
import { useNavigate } from 'react-router-dom';


export default function LeftDrawer() {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <motion.div
      className='d-sm-none left-drawer'
      animate={{
        marginLeft: extra?.hideDrawer ? ["-120%", "-5%"] : ["-2%", "-120%"],
      }}
      transition={{
        type: "spring",
        duration: 0.4
      }}
      style={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        left: "0",
        zIndex: "2",
        backgroundColor: darkMode ? "#1E1E1E" : "#eee",
        marginLeft: "0rem",
      }}>

      <div className="d-grid gap-2"
        style={{
          marginLeft: "10px",
          // width: "85%",
          textAlign: "start"
        }}>
        {/* <div className='container text-end'>
          <img
            className={`d-sm-none d-md-inline basic-icons ${!extra?.hideDrawer && "img-r"} ${darkMode ? "" : "img-i"}`}
            onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
            src={CloseIcon} alt="arrow"
          />
        </div> */}
        <div className='ms-1 mt-2 d-flex justify-content-between'>
          <span
            className=''
            style={{
              // border:"1px solid #fff",
              width: "6rem",
              height: "2rem",
            }}
          >
            <img
              style={{ cursor: "pointer" }}
              className={`ms-sm-1`}
              src={NLogo}
              onClick={() => navigate("/")}
              height={30} width={30} alt={"Nlogo"} />
            <span className={`d-sm-none d-md-inline ${extra?.hideLeftBar && "d-md-none"}`}
              style={{
                marginLeft: "0.3rem",
                fontWeight: "500",
                verticalAlign: "middle",
                color: darkMode ? "#fff" : "#1E1E1E",
                fontSize: "20px",
              }}>
              Name
            </span>
          </span>
          <img
            className={`basic-icons 
          ${extra?.hideLeftBar && "img-r"} ${darkMode ? "" : "img-i"}`}
            onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
            src={CloseIcon} alt="arrow"
          />
        </div>

        <ButtonLeft link={"/"} Icon={HomeIcon} title={"Home"} show />
        <ButtonLeft link={"/reports"} Icon={SectionIcon1} title={"Reports"} show />
        <ButtonLeft link={"/status"} Icon={SectionIcon2} title={"Status"} show />
        <ButtonLeft link={"/shared"} Icon={SectionIcon3} title={"Shared"} show />
        <center
          className=''
          style={{
            position: "absolute",
            width: (extra?.hideLeftBar) ? "90%" : "85%",
            bottom: "1rem",
            display: "block",
            justifyContent: "center",
            // border: "1px solid white",
            // marginLeft:"-0.5rem"
          }}
        >
          {/* rendering language icon and dark mode button */}
          <div className='row mb-3'>
            <div className='col-4'>
              <motion.button
                whileHover={{
                  scale: 1.1
                }}
                className={`btn btn-sm col-5 fade-text d-flx 
                            ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"}
                             fade-text-selected`}
                type="button"
                style={{
                  verticalAlign: "middle",
                  minWidth: "5.6rem",
                  marginBottom: "-0.3rem",
                  lineHeight: "1.6rem"
                }}>
                <img src={NLogo} alt="SectionIcon3"
                  height={20}
                  className={!extra.hideLeftBar ? `me-sm-0 me-md-1 me-lg-1` : ``} />
                <Tooltip
                  style={{
                    background: darkMode ? "" : "#999", position: "absolute",
                  }}
                  className='tooltip'
                  anchorSelect=".my-anchor-element" place="top">
                  {extra?.net_data?.symbol} {extra?.balance}
                </Tooltip>
                <span
                  className={`my-anchor-element ${!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}`}
                >
                  ${parseInt(extra?.balance || 0).toFixed(2)}
                </span>
              </motion.button>
            </div>
            <div className='col-4'>
              {/* this is XYZ coin button */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  dur: 0.1
                }}
                className={`btn btn-sm col-5
                            ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} 
                            ms-2 me-2 left-bottom-btn blue-txt`}
                type="button"
                style={{
                  background: '#A3E3FF',
                  borderRadius: '10px',
                  color: "#3772FF",
                  width: "4.4rem",
                  fontSize: "13px",
                  lineHeight: "25px"
                }}
              >
                <span
                  className={!extra?.hideLeftBar ? `d-sm-none d-md-inline me-0` : `d-none`}>
                  Buy
                </span>
                <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
                  <span className=''>
                    {extra?.net_data?.symbol.length > 3 ? extra?.net_data?.symbol.substr(0, 2) + ".." : extra?.net_data?.symbol || "XYZ"}
                  </span>
                </span>
              </motion.button>
            </div>
            <div className='col-5'
              style={{
                // border: "1px solid black",
                width: "6rem",
                // paddingBottom: "1rem"
              }}
            >
              <span
                className='p-1 mb-5 dark-btn'
                style={{
                  backgroundColor: darkMode ? "#353945" : "#ccc",
                  borderRadius: "20px",
                  marginBottom: "-7rem",
                  verticalAlign: "middle",
                }}>

                <img src={MoonIcon}
                  height={18} width={18}
                  style={{ margin: "-0.4rem -0.2rem auto 0.2rem" }}
                  alt="home"
                  className=''
                />
                <img src={BlueDotIcon}
                  height={37} width={37}
                  alt="home"
                  className={darkMode
                    ? "basic-icons dark-btn-on"
                    : "basic-icons dark-btn-off"}
                  onClick={() => {
                    window.localStorage.setItem("darkmode", darkMode ? "0" : "1");
                    dispatch(toggelDarkMode());
                  }}
                />
              </span>
            </div>
            <div className='col-1 mb-2 ms-2'>
              <img src={LangIcon} height={26} width={26}
                alt="home"
                onClick={() => {
                  dispatch(setExtra({
                    key: "alert", val: {
                      element:
                        <motion.div
                          animate={{ scale: [0.7, 1] }}
                          className="alert f-alert alert-primary text-center"
                          role="alert">
                          Multiple languages not supported yet!!
                        </motion.div>,
                      time: 3000
                    }
                  }));
                }}
                className={"basic-icons me-2 "}
                style={{ marginBottom: "-0.5rem" }}
              />
            </div>
          </div>
        </center>
      </div>
    </motion.div>
  );
}
