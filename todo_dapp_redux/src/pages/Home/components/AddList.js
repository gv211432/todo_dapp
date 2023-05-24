import React from 'react';
import PlusIcon from "../../../assets/plus.png";
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';

export default function AddList() {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <div className="row m-1" style={{
      verticalAlign: "middle",
      maxWidth: "16rem", minWidth: "10rem",
    }} >
      <div className=""
        style={
          {
            background: darkMode ? '#242731' : "#8585855a",
            mixBlendMode: 'normal',
            borderRadius: '12px',
            minHeight: "4rem",
            verticalAlign: "middle",
            paddingTop: "1.3rem",
            position: "relative",
            border: darkMode ? "" : "1px solid grey"
          }
        }
      >
        <div style={{ position: "absolute", right: "0.5rem", top: "1rem" }} >
          <img src={PlusIcon} alt="oval_bag"
            className='me-2 p-2 rounded basic-icons rounded-circle' height={30}
            style={{
              backgroundColor: "#30343d"
            }}
            onClick={() => {
              dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }));
              dispatch(setExtra({
                key: "right_data",
                val: {
                  type: "add_list",
                }
              }));
            }}
          />
        </div>
        <h5 className="card-title"
          style={
            {
              fontFamily: '\'Inter\'',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              letterSpacing: '1px',
              color: darkMode ? '#FFFFFF' : "#242731",
              paddingBottom: "1.0rem"
            }
          }
        >Add Todo-List</h5>
      </div>
    </div>);
}
