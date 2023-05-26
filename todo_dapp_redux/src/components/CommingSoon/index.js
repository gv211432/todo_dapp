import React from 'react';
import Comming from "../../assets/comming.png";
import { motion } from "framer-motion";

export default function CommingSoon() {
  return (
    <div className='container'>
      <div className='col-12'>
        <div className='row-4' style={{ height: "10rem" }}></div>
        <div className='row-4'>
          <motion.img
            animate={{
              scale: [0.5, 1]
            }}
            transition={{
              type: "spring",
              duration: [0.3, 10]
            }}
            src={Comming}
            alt='Comming soon'
            height={120}
          /><br />
          <span className='f-txt'>
            Feature is Comming soon...
          </span>
        </div>
      </div>
    </div>
  );
}
