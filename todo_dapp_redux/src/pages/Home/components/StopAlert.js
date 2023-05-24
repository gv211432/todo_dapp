import React from 'react';
import { selectDarkMode } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';
import mm from "../../../assets/metamask.json";
import { motion } from "framer-motion";

export default function StopAlert({ data }) {
  const darkMode = useSelector(selectDarkMode);
  // console.log({ data });
  return (
    <div
      className=''
      style={{
        position: "absolute",
        zIndex: "3",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.25)"
      }}>
      <center>
        <motion.div
          animate={{
            scale: [0.7, 1]
          }}
          className='container'>
          <center
            className='left-drawer col-lg-6 col-md-6 col-sm-12'
            style={{
              backgroundColor: darkMode ? "#242731" : "#ddd",
              minHeight: "18rem",
              marginTop: "10%",
              border: "2px solid red",
              borderRadius: "16px"
            }}
          >
            <img
              src={mm?.data}
              alt="Metamask Img"
              style={{}}
            /><br />
            <span
              className='p-2'
              style={
                {
                  mixBlendMode: 'normal',
                  borderRadius: '26px',
                  color: darkMode ? "#ddd" : '#353945d9',
                  fontWeight: '600'
                }}
            >
              {data?.msg}
              <br />
              <br />
              <ul
                className='text-start'
                style={{
                  listStylePosition: "inside"
                }}
              >
                {data?.ids?.map(name => <li>{name}</li>)}
              </ul>
            </span>
          </center>
        </motion.div>
      </center>
    </div>
  );
}
