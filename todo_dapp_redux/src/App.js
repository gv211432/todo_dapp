import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import abi from "./contract/todo.json";
import { ethers } from 'ethers';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Section1 from './pages/Section1';
config.autoAddCss = false;
library.add(far, fas);


function App() {
  const [account, setAccout] = useState("None");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const connetWallet = async () => {
    // this is given contract on BSC testnet
    // const contractAddress = "0xdAF06E9F17C7aF4CD781DA3CdfC9338ffab440cD";

    // this is deployed same contract on sapolia ether testnet
    const contractAddress = "0x70656706F595FC28D95830114bB9D1618847693F";

    const contractAbi = abi.abi;
    try {
      const { ethereum } = window;
      if (ethereum) {
        // events on chain change or account change
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const accounts = await ethereum?.request({
          method: "eth_requestAccounts"
        });
        console.log({ accounts });
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        setAccout(accounts);
        setState({ provider, signer, contract });
      }
    } catch (error) {
      // alert("Metamask not present!!");
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      // const transaction = await state?.contract?.addList("second_list");
      // const transaction = await state?.contract?.addTodo(
      //   "first_list",
      //   "My first todo in DApp second!!",
      //   "I am really excited that the web3 is awesome!!");
      // const transaction = await state?.contract?.getUserIds();
      const transaction = await state?.contract?.getTodos(account[0]);
      // await transaction.wait();
      console.log((await transaction));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // connetWallet();
  }, []);

  useEffect(() => {
    if (state) {
      // console.log({ state });
      // fetchData();
    }
  }, [state]);

  return (
    // <Home />
    <Section1 />
  );
}

export default App;
