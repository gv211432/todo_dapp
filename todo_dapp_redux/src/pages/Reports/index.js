import React, { useState } from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import Alerts from '../../components/Alert';
import { selectDarkMode } from '../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';
import RightSection from './components/RightSection';
import Comming from "../../assets/comming.png";
import { motion } from "framer-motion";
import CommingSoon from '../../components/CommingSoon';

export default function ReportsPage() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const mainComponent = () => {
    return (<CommingSoon />);
  };

  return (<div
    style={{
      width: "100%",
      height: "100vh"
    }}
  >
    <Alerts />
    <LeftRightBars
      mainComponent={mainComponent()}
      rightComponent={<RightSection />}
    />
  </div>
  );
}
