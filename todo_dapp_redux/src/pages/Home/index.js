import React, { useEffect, useRef, useState } from 'react';
import LeftRightBars from '../../components/LeftRightBars';
import { selectDarkMode, setExtra } from '../../features/state/gobalState';
import { useDispatch, useSelector } from 'react-redux';
import DesktopDisplay from './components/DesktopDisplay';
import MobileDisplay from './components/MobileDisplay';
import connetWallet from '../../helpers/conectWallet';
import RightSection from './components/RightSection';
import "./style.css";

export default function Section1() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const reqCryptoStarted = useRef(false);

  // const ether = useSelector(selectEther);
  const [ether, setEther] = useState(null);

  const connect = async () => {
    const e = await connetWallet(); // ehterium connection
    setEther(e);
    const lists = await e?.contract?.getUserIds();
    const todos = await e?.contract?.getTodos(e?.signer?.address);
    console.log("List :", (await lists));
    console.log("Todos :", (await todos));

    if (await lists) {
      for (const list of (await lists)) {
        console.log({ list });
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
    dispatch(setExtra({ key: "list_data", val: allTodos }));
  };

  useEffect(() => {
    if (!reqCryptoStarted.current) {
      reqCryptoStarted.current = true;
      console.log("Connecting crypto wallet..");
      connect();
    }
  }, []);

  const mainComponent = () => {
    // console.log({ ether });
    return <>
      <MobileDisplay />
      <DesktopDisplay />
    </>;
  };

  return (
    <LeftRightBars
      mainComponent={mainComponent()}
      rightComponent={<RightSection />}
    />
  );
};
