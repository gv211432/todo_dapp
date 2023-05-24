import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExtra, setExtra } from '../../features/state/gobalState';

export default function Alerts() {

  const [allAlerts, setAllAlerts] = useState([]);
  const alert = useSelector(selectExtra)?.alert;
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert) {
      console.log("Alert rendered..");
      setAllAlerts(p => [...p, alert.element]);
      setTimeout(() => {
        setAllAlerts(p => p?.filter((d, i) => i !== 0));
      }, alert?.time || 1000);
      dispatch(setExtra({ key: "alert", val: null }));
    }
  }, [alert]);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        bottom: "0rem",
        zIndex: "3"
      }}>
      <div
        className='container'
        style={{
          bottom: "1rem",
          maxWidth: "30rem"
        }}>
        {allAlerts?.map(e => e)}
      </div>
    </div>
  );
}
