import React from 'react';
import OvalBag from "../../../assets/Oval_bag.png";
import EditPen from "../../../assets/edit_pen.png";
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';

export default function ShowTodo() {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <div className="row m-1"
      style={{
        maxWidth: "16rem", minWidth: "10rem",
      }}>
      <div className="card-body"
        style={{
          background: darkMode ? "#191B20" : "#ddd",
          opacity: "0.8",
          borderRadius: "16px",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", right: "0.3rem", top: "0.4rem" }} >
          <img src={EditPen} alt="oval_bag"
            className='me-2 rounded rounded-circle basic-icons' height={30}
            style={{
              backgroundColor: "#30343d"
            }}
            onClick={() => dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }))}
          />
        </div>
        <h5 className="card-title text-start" style={
          {
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "24px",
            color: darkMode ? "#fff" : "#444549",
          }
        }>
          <img src={OvalBag} alt="oval_bag" className='me-2' height={30} />
          Carrot
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
          Incididunt ex sint enim esse dolore velit dolore ea quis exercitation excepteur.
        </h6>
      </div>
    </div>);
}
