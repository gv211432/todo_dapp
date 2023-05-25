import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NLogo from "../../assets/N_logo.png";
import CloseIcon from "../../assets/close_icon.png";
import HomeIcon from "../../assets/home_icon.png";
import SectionIcon1 from "../../assets/section_1.png";
import SectionIcon2 from "../../assets/section_2.png";
import SectionIcon3 from "../../assets/share.png";
import LangIcon from "../../assets/Language.png";
import MoonIcon from "../../assets/moon.png";
import BlueDotIcon from "../../assets/blue_dot.png";
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra, toggelDarkMode } from '../../features/state/gobalState';
import ButtonLeft from './ButtonLeft';
import LangAndDarkBtn from '../../pages/Home/components/LangAndDarkBtn';
import { motion } from "framer-motion";

export default function LeftRightBars({ mainComponent, rightComponent }) {

  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();
  const [deleteDrawer, setDeleteDrawer] = useState(true);
  useEffect(() => {
    if (extra?.hideRightDrawer) {
      setDeleteDrawer(false);
    } else {
      setTimeout(() => {
        setDeleteDrawer(true);
      }, 500);
    }
  }, [extra?.hideRightDrawer]);
  // console.log({ darkMode });
  // console.log({ extra });

  return (
    <div
      style={{ height: "100vh" }}
    >
      {/* top blue bar secition */}
      <div className='row bg-primary'
        style={{ height: "1.8rem", textAlign: "center", justifyContent: "center", color: "white" }}>
        Lorem Ipsum is simply dummy text of the printing
      </div>

      {/* main content section */}
      <center style={{ height: "100%" }}>
        <div className='row' style={{ height: "100%" }}>
          {/* left section */}
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
              <center>
                <span className='me-lg-4 me-md-0' >
                  <img src={NLogo} height={30} width={30} alt={"Nlogo"} />
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
                  className={`d-sm-none d-md-inline basic-icons ${extra?.hideLeftBar && "img-r"} ${darkMode ? "" : "img-i"}`}
                  onClick={() => dispatch(setExtra({ key: "hideLeftBar", val: !extra?.hideLeftBar }))}
                  src={CloseIcon} alt="arrow"
                />
              </center>
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
              <ButtonLeft Icon={HomeIcon} title={"Home"} />
              <ButtonLeft Icon={SectionIcon1} title={"Section 1"} />
              <ButtonLeft Icon={SectionIcon2} title={"Section 2"} />
              <ButtonLeft Icon={SectionIcon3} title={"Section 3"} />
              <ButtonLeft Icon={HomeIcon} title={"Section 4"} />
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
              <div className='ms-lg-3 ms-md-1 ms-sm-0'>
                {/* show on left secetion collaspe */}
                <div
                  className={`${extra?.hideLeftBar ? "d-grid gap-1 mb-2" : "d-sm-grid d-md-none gap-1 mb-2 ms-2"} me-sm-2 text-center`}
                  style={{
                    margin: "0rem",
                  }}>
                  <button class={`btn btn-sm btn-primary fade-text ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} ms-2`}
                    type="button"
                    style={{ verticalAlign: "middle" }}>
                    <span className={!extra?.hideLeftBar ? `d-sm-inline d-md-inline` : `pe-1`}>
                      $
                    </span>
                    <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
                      $0.09
                    </span>
                  </button>
                  <button class={`btn btn-sm btn-primary fade-text ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} ms-2`}
                    type="button" style={{ verticalAlign: "middle" }}>
                    <span className={!extra?.hideLeftBar ? `d-sm-inline d-md-inline` : `pe-1`}>
                      Buy
                    </span>
                    <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
                      XYZ
                    </span>
                  </button>
                </div>

                {/* show on left section show */}
                <div
                  className={`${extra?.hideLeftBar ? "d-none" : "d-md-flex mb-3 d-sm-none"} me-sm-2 text-center`}
                  style={{}} >
                  <button
                    className={`btn btn-sm btn-primary fade-text ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} ms-2`}
                    type="button"
                    style={{ verticalAlign: "middle", width: "5rem" }}>
                    {/* <img src={SectionIcon3} alt="SectionIcon3" className={!extra.hideLeftBar ? `me-sm-0 me-md-1 me-lg-1` : ``} /> */}
                    <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
                      $0.09
                    </span>
                  </button>
                  <button
                    className={`btn btn-sm btn-primary fade-text basic-cards 
                    ${!extra.hideLeftBar ? "text-lg-start" : "text-middle"} 
                    ms-2 me-2 left-bottom-btn`}
                    type="button"
                  // style={{
                  //   backgroundColor: "#A3E3FF",
                  //   color: "#3772FF",
                  // }}
                  >
                    <span
                      className={!extra?.hideLeftBar ? `d-sm-none d-md-inline me-0` : `d-none`}>
                      Buy
                    </span>
                    <span className={!extra?.hideLeftBar ? `d-sm-none d-md-inline` : `d-none`}>
                      XYZ
                    </span>
                  </button>
                </div>
              </div>
              {/* rendering language icon and dark mode button */}
              <LangAndDarkBtn
                LangIcon={LangIcon}
                MoonIcon={MoonIcon}
                BlueDotIcon={BlueDotIcon}
              />
            </center>
          </div>

          {/* right main setion */}
          <div className='col' style={{ height: "100%" }}>
            {/* top bar main seciton */}
            <div className='row'
              style={{
                height: "3rem",
                borderBottom: darkMode ? "3px solid #242731" : "3px solid #888888",
                backgroundColor: darkMode ? "#1E1E1E" : "#eee",
              }}>
              <div className='container text-start d-sm-none'>
                <img
                  className={`d-sm-none d-md-inline basic-icons ${!extra?.hideDrawer && "img-r"} ${darkMode ? "" : "img-i"}`}
                  onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
                  src={CloseIcon} alt="arrow"
                />
              </div>

              {/* left drawer */}
              <motion.div
                className='d-sm-none left-drawer'
                animate={{
                  marginLeft: extra?.hideDrawer ? ["-120%", "-5%"] : ["-2%", "-120%"],
                  // display: extra?.hideDrawer ? ["none", "", "", "", ""] : ["", "", "", "", "none"],
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
                  <div className='container text-end'>
                    <img
                      className={`d-sm-none d-md-inline basic-icons ${!extra?.hideDrawer && "img-r"} ${darkMode ? "" : "img-i"}`}
                      onClick={() => dispatch(setExtra({ key: "hideDrawer", val: !extra?.hideDrawer }))}
                      src={CloseIcon} alt="arrow"
                    />
                  </div>
                  <ButtonLeft Icon={HomeIcon} title={"Home"} show />
                  <ButtonLeft Icon={SectionIcon1} title={"Section 1"} show />
                  <ButtonLeft Icon={SectionIcon2} title={"Section 2"} show />
                  <ButtonLeft Icon={SectionIcon3} title={"Section 3"} show />
                  <ButtonLeft Icon={HomeIcon} title={"Section 4"} show />
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
                        <button
                          className={`btn btn-sm btn-primary fade-text`}
                          type="button"
                          style={{ verticalAlign: "middle", width: "5rem" }}>
                          {/* <img src={SectionIcon3} alt="SectionIcon3" className={!extra.hideLeftBar ? `me-sm-0 me-md-1 me-lg-1` : ``} /> */}
                          <span className={extra?.hideLeftBar ? `d-md-inline` : ``}>
                            $0.09
                          </span>
                        </button>
                      </div>
                      <div className='col-4'>
                        <button
                          className={`btn btn-sm btn-primary fade-text basic-cards 
                            ms-2 left-bottom-btn`}
                          type="button"
                        >
                          <span
                            className={!extra?.hideLeftBar ? `d-md-inline me-0` : ``}>
                            Buy
                          </span>
                          <span className={!extra?.hideLeftBar ? `d-md-inline` : ``}>
                            XYZ
                          </span>
                        </button>
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
                          className={"basic-icons me-2 "}
                          style={{ marginBottom: "-0.5rem" }}
                        />
                      </div>
                    </div>
                  </center>
                </div>

              </motion.div>

              {/* Right drawer */}
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
            </div>

            <div className='row' style={{ height: "100%" }}>
              {/* main of main right section */}
              <div className='col-lg-9 col-md-8 col-sm-12' style={{
                height: "100%",
                backgroundColor: darkMode ? "#1E1E1E" : "#eee",
              }}>
                {mainComponent}
              </div>
              {/* right of main right section */}
              <div
                className='d-none d-md-block d-lg-block col-sm-0 col-md-4 col-lg-3'
                // className='d-none col'
                style={{
                  height: "100%",
                  backgroundColor: darkMode ? "#1E1E1E" : "#eee",
                  borderLeft: darkMode ? "5px solid #242731" : "5px solid #888888"
                }}>
                {rightComponent}
              </div>
            </div>
          </div>
        </div>
      </center >
    </div >
  );
}
