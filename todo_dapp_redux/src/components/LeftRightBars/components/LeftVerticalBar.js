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


export default function LeftVerticalBar() {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={`d-none d-sm-block col-sm-2 
    ${!extra.hideLeftBar ? "col-md-3 col-lg-2" : "left-fixed-bax"} 
      d-none`}
      style={{
        height: "100%",
        paddingTop: "0.7rem",
        position: "relative",
        backgroundColor: darkMode ? "#1E1E1E" : "#eee",
        borderRight: "0.1rem solid #9394a6"
      }}>
      <div className='container' style={{}}>
        <div className='d-flex justify-content-between'>
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
              height={30} width={30} alt={"Nlogo"}
            />
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
          ${extra?.hideLeftBar ? "d-none" : "d-sm-none d-md-inline"}
          ${extra?.hideLeftBar && "img-r"} ${darkMode ? "" : "img-i"}`}
            onClick={() => dispatch(setExtra({ key: "hideLeftBar", val: !extra?.hideLeftBar }))}
            src={CloseIcon} alt="arrow"
          />
        </div>
        <img
          className={`basic-icons 
        ${extra?.hideLeftBar && "img-r"}
        ${!extra?.hideLeftBar ? "d-none" : ""} 
        ${darkMode ? "" : "img-i"}`
          }
          onClick={() => dispatch(setExtra({ key: "hideLeftBar", val: !extra?.hideLeftBar }))}
          src={CloseIcon} alt="arrow"
        />
      </div>

      <div class="d-grid gap-2" style={{
        margin: "0rem",
        textAlign: "start"
      }}>
        <div className='row' style={{
          height: "2rem",
          marginTop: extra?.hideLeftBar ? "-2rem" : ""
        }}>
          <span></span>
        </div>
        <ButtonLeft link={"/"} Icon={HomeIcon} title={"Home"} />
        <ButtonLeft link={"/reports"} Icon={SectionIcon1} title={"Reports"} />
        <ButtonLeft link={"/status"} Icon={SectionIcon2} title={"Status"} />
        <ButtonLeft link={"/shared"} Icon={SectionIcon3} title={"Shared"} />
      </div>

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
        <div className=''>
          {/* show on left secetion collaspe */}
          <div
            className={`${extra?.hideLeftBar ? "d-grid gap-1 mb-2" : "d-sm-grid d-md-none gap-1 mb-2 ms-2"} me-sm-2 text-center`}
            style={{
              margin: "0rem",
            }}>
            {/* <button class={`btn btn-sm btn-primary fade-text ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} ms-2`}
            type="button"
            style={{ verticalAlign: "middle" }}>
            <span className={!extra?.hideLeftBar ? `d-sm-inline d-md-inline` : `pe-1`}>
              $
            </span>
            <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
              $0.09
            </span>
          </button> */}
            <motion.button
              animate={{
                scale: 1.1
              }}
              className={`btn btn-sm col-5 fade-text d-flx 
            ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"}
             fade-text-selected`}
              type="button"
              style={{
                verticalAlign: "middle",
                minWidth: "5rem",
              }}>
              <img src={NLogo} alt="SectionIcon3"
                height={20}
                className={``} />
              <Tooltip
                style={{
                  background: darkMode ? "" : "#999", position: "absolute",
                  zIndex: 100
                }}
                className='tooltip'
                anchorSelect=".my-anchor-element" place="top">
                {extra?.net_data?.symbol} {extra?.balance}
              </Tooltip>
              <span className={`my-anchor-element`}
                style={{ zIndex: 10 }}
              >
                ${parseInt(extra?.balance || 0).toFixed(2) || ""}
              </span>
            </motion.button>
            {/* <button class={`btn btn-sm btn-primary fade-text ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} ms-2`}
            type="button" style={{ verticalAlign: "middle" }}>
            <span className={!extra?.hideLeftBar ? `d-sm-inline d-md-inline` : `pe-1`}>
              Buy
            </span>
            <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
              XYZ
            </span>
          </button> */}
            <motion.button
              whileHover={{
                scale: 1.1,
                dur: 0.1
              }}
              className={`btn btn-sm col mt-1
            ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} 
            ms-2 me-2 left-bottom-btn blue-txt`}
              type="button"
              style={{
                background: '#A3E3FF',
                borderRadius: '10px',
                color: "#3772FF",
                minWidth: "4.4rem",
                fontSize: "13px",
                lineHeight: "25px"
              }}
            >
              <span
                className={``}>
                Buy
              </span>
              <span className={""}>
                {extra?.net_data?.symbol.length > 3 ? extra?.net_data?.symbol.substr(0, 2) + ".." : extra?.net_data?.symbol || "XYZ"}
              </span>
            </motion.button>
          </div>

          {/* show on left section show */}
          <center
            className={`${extra?.hideLeftBar ? "d-none" : "d-md-block mb-3 d-sm-none"} 
          row ms-1 text-center`}
            style={{
              // border: "1px solid white",
              width: "110%",
            }} >
            {/* this is buy button */}
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
                className={`tooltip ${!darkMode ? "fade-text-selected" : "fade-text-light-selected "}`}
                anchorSelect=".my-anchor-element" place="top">
                {extra?.net_data?.symbol} {extra?.balance}
              </Tooltip>
              <span
                className={`my-anchor-element ${!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}`}
              >
                ${parseInt(extra?.balance || 0).toFixed(2)}
              </span>
            </motion.button>
            {/* this is XYZ coin button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                dur: 0.1
              }}
              className={`btn btn-sm col-5 mt-1
            ${!extra.hideLeftBar ? "text-lg-middle" : "text-middle"} 
            ms-2 me-2 left-bottom-btn blue-txt`}
              type="button"
              style={{
                background: '#A3E3FF',
                borderRadius: '10px',
                color: "#3772FF",
                // minWidth: "4.4rem",
                fontSize: "13px",
                lineHeight: "25px"
              }}
            >
              <span
                className={!extra?.hideLeftBar ? `d-sm-none d-md-inline me-0` : `d-none`}>
                Buy
              </span>
              <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
                {extra?.net_data?.symbol || "XYZ"}
              </span>
            </motion.button>
          </center>
        </div>
        {/* rendering language icon and dark mode button */}
        <LangAndDarkBtn
          LangIcon={LangIcon}
          MoonIcon={MoonIcon}
          BlueDotIcon={BlueDotIcon}
        />
      </center>
    </div>
  );
}
