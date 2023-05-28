import React from 'react';
import { selectExtra } from '../../../features/state/gobalState';
import { useSelector } from 'react-redux';

export default function TransactionSpinner() {
  const extra = useSelector(selectExtra);

  return (<center
    style={{
      position: "absolute",
      bottom: "0.5rem",
      width: "100%",
      marginLeft: "-1rem"
      // justifyContent:"center"
    }}
  >
    {!(extra?.counter > 0)
      ? <><div class="spinner-border text-danger"
        role="status">
        <span class="visually-hidden">Loading...</span>
      </div><br />
        <span className='f-txt'>
          Pending transaction...
        </span></>
      : <><div class="spinner-border text-success"
        role="status">
        <span class="visually-hidden">Loading...</span>
      </div><br />
        <span className='f-txt'>
          Processing transaction...
        </span></>}
  </center>);
}
