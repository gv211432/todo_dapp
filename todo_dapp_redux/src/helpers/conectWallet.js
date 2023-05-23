import { ethers } from 'ethers';
import abi from "../contract/todo.json";

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
      // console.log({ provider, signer, contract });
      return { provider, signer, contract };
    }
  } catch (error) {
    // alert("Metamask not present!!");
    console.log(error);
    return {};
  }
};

export default connetWallet;