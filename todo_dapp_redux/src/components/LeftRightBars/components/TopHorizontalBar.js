import React from 'react';
import { useSelector } from 'react-redux';
import { selectExtra } from '../../../features/state/gobalState';


export default function TopHorizontalBar() {
  const extra = useSelector(selectExtra);
  return (
    <>
      <div className='d-none d-md-block row bg-primary'
        style={{ height: "1.8rem", textAlign: "center", justifyContent: "center", color: "white" }}>
        {extra?.network
          ? `On ${extra?.network?.name} @ ${extra?.account}`
          : "Network and Address not found!!"}
      </div>
      <div className='d-md-none row bg-primary'
        style={{ height: "1.8rem", textAlign: "center", justifyContent: "center", color: "white" }}>
        {extra?.network
          ? `On ${extra?.network?.name} @ ${extra?.account?.substr(0,5)}..${extra?.account?.substr(extra?.account?.length-3)}`
          : "Network and Address not found!!"}
      </div>
    </>
  );
}
