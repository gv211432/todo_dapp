import React, { useEffect, useRef, useState } from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import { selectDarkMode, selectEther, selectExtra, setExtra } from '../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';
import DesktopDisplay from './components/DesktopDisplay';
import MobileDisplay from './components/MobileDisplay';
import connetWallet from '../../helpers/conectWallet';
import RightSection from './components/RightSection';
import "./style.css";
import StopAlert from './components/StopAlert';
import Alerts from '../../components/Alert';
import { ethers } from 'ethers';

export default function HomePage() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const reqCryptoStarted = useRef(false);
  // const ether = useSelector(selectEther);
  const [ether, setEther] = useState(null);
  const [stop, setStop] = useState(null);
  const extra = useSelector(selectExtra);
  useEffect(() => {
    console.log({ extra });
  }, [extra]);

  const connect = async () => {
    try {
      const e = await connetWallet(); // ehterium connection
      console.log(await e);
      setEther(e);
      console.log({e});
      if (e?.stop?.msg) {
        setStop(e?.stop);
      }
      else if (e?.contract) {
        const lists = e?.contract ? await e?.contract?.getUserIds() : {};
        const todos = e?.contract ? await e?.contract?.getTodos(e?.signer?.address) : {};
        // console.log("List :", (await lists));
        // console.log("Todos :", (await todos));
        if (await lists) {
          for (const list of (await lists)) {
            // console.log({ list });
          }
        }
        const allTodos = [];
        if (await todos) {
          for (const manyTodos of JSON.parse(JSON.stringify((await todos)))) {
            allTodos.push({
              list_name: manyTodos[0],
              data: manyTodos[1]?.map(t => ({
                index: t[0],
                title: t[1],
                desc: t[2],
                done: t[3],
              }))
            });
          }
        }
        const balance = await e.provider.getBalance(e.account);
        const balanceInEth = ethers.formatEther(balance);
        dispatch(setExtra({ key: "list_data", val: allTodos }));
        dispatch(setExtra({ key: "balance", val: balanceInEth }));
        dispatch(setExtra({ key: "network", val: { name: e?.netwrok?.name } }));
        dispatch(setExtra({ key: "block", val: e.blockNo }));
        dispatch(setExtra({ key: "account", val: e.account }));
        dispatch(setExtra({ key: "net_data", val: e.net_data }));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    connect();
    console.log("Connecting crypto wallet..");
    // dispatch(setExtra({ key: "d_button", val: "Home" }));
  }, [useSelector(selectEther)]);

  const mainComponent = () => {
    // console.log({ ether });
    return <>
      <MobileDisplay />
      <DesktopDisplay />
    </>;
  };

  return (<div
    style={{
      width: "100%",
      height: "100vh"
    }}
  >
    {stop && <StopAlert data={stop} />}
    <Alerts />
    <LeftRightBars
      mainComponent={mainComponent()}
      rightComponent={<RightSection />}
    />
  </div>
  );
};
