import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode, selectExtra } from '../../../features/state/gobalState';
import { Tooltip } from 'react-tooltip';


export default function TopHorizontalBar() {
  const extra = useSelector(selectExtra);
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      <Tooltip
        className={`tooltip ${!darkMode ? "fade-text-selected" : "fade-text-light-selected "}`}
        anchorSelect=".tip-ptop-bar-coins"
        style={{
          maxWidth:"20rem"
        }}
        place="top">
        You are on {extra?.net_data?.name} with id {extra?.account} and {"\n"}
        working with contract id {extra?.net_data?.ac}
      </Tooltip >
      <div className='row bg-primary tip-ptop-bar-coins'
        style={{ height: "1.8rem", textAlign: "center", justifyContent: "center", color: "white" }}>
        {extra?.network
          ? `On ${extra?.net_data?.name} @ ${extra?.account?.substr(0, 5)}..${extra?.account?.substr(extra?.account?.length - 3)}`
          : "Network and Address not found!!"}
      </div>
    </>
  );
}
