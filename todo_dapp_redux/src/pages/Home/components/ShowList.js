import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectExtra, setExtra } from '../../../features/state/gobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ShowList() {
  const darkMode = useSelector(selectDarkMode);
  const extra = useSelector(selectExtra);
  const dispatch = useDispatch();

  return (
    <div className="row m-1" style={{
      verticalAlign: "middle",
      maxWidth: "16rem", minWidth: "10rem",
    }} >
      <div className="basic-cards"
        onClick={() => dispatch(setExtra({ key: "hideRightDrawer", val: !extra?.hideRightDrawer }))}
        style={
          {
            background: darkMode ? '#242731' : "#8585855a",
            mixBlendMode: 'normal',
            borderRadius: '12px',
            minHeight: "4rem",
            verticalAlign: "middle",
            paddingTop: "1.3rem",
            border: darkMode ? "" : "1px solid grey",
            position: "relative"
          }
        }
      >
        {/* <div
          style={{
            position: "absolute",
            right: "0.3rem",
            top: "0.4rem",
            backgroundColor: "#30343d",
            height: "1.8rem",
            width: "1.8rem"
          }}
          className='basic-icons rounded rounded-circle'
        >
          <FontAwesomeIcon
            width={15}
            height={15}
            color='#ddd'
            icon="fa-solid fa-trash"
          />
        </div> */}

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
        >List : Things to buy amnalfalj afkdja adifjjaojjaowe eoe w</h5>
      </div>
    </div>
  );
}
