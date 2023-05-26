import { ethers } from 'ethers';
import abi from "../contract/todo.json";

const chain_id_map = new Map([
  ["0x15e1", "Greenfield BSC Testnet"],
  ["0x1", "Ethereum Mainnet"],
  ["0x61", "BNB Smart Chain Testnet"],
  ["0x13881", "Polygon Mumbai Testnet"],
  ["0x5", "Goerli Testnet"],
  ["0xaa36a7", "Sepolia Testnet"],
]);

const chain_id_contract_map = new Map([
  ["0x61", "0xdAF06E9F17C7aF4CD781DA3CdfC9338ffab440cD"],
  ["0x13881", "0x17B73668B91510CaF0F9CD0594264E6684ee0f06"],
  ["0xaa36a7", "0x70656706F595FC28D95830114bB9D1618847693F"],
]);

const _ETHER_ = {
  val: null,
  get: () => _ETHER_.val,
  set: (d) => _ETHER_.val = d
};

window?.ethereum?.on("chainChanged", () => {
  window.location = window.location.origin;
});
window?.ethereum?.on("accountsChanged", () => {
  window.location = window.location.origin;
});

const connetWallet = async () => {
  // this is given contract on BSC testnet
  // const contractAddress = "0xdAF06E9F17C7aF4CD781DA3CdfC9338ffab440cD";
  // this is given for polygons mumbai testnet
  // const contractMumbai = "0x17B73668B91510CaF0F9CD0594264E6684ee0f06";
  // this is deployed same contract on sapolia ether testnet
  // const contractAddress = "0x70656706F595FC28D95830114bB9D1618847693F";

  let contractAddress = "";
  const contractAbi = abi.abi;
  try {
    const { ethereum } = window;
    if (ethereum && !_ETHER_.get()) {
      // events on chain change or account change
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      // alert("Network " + chain_id_map.get(chainId));

      // if netwrok is not from specified one
      if (!Array.from(chain_id_contract_map).map(d => d[0]).includes(chainId)) {
        return {
          stop: {
            msg: <span>
              {chain_id_map.get(chainId)} does not have the contrat deployed!
              Recommendation: Use Sepolia Testnet
            </span>
          }
        };
      } else {
        contractAddress = chain_id_contract_map.get(chainId);
      }
      // console.log(chain_id_map);
      // console.log("Etherium", window?.ethereum);
      const accounts = await ethereum?.request({
        method: "eth_requestAccounts"
      });
      // console.log({ accounts });
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const balance = await provider.getBalance(accounts[0]);
      const balanceInEth = ethers.formatEther(balance);
      const netwrok = await provider.getNetwork();
      const blockNo = await provider.getBlockNumber();
      // console.log({ provider, signer, contract });
      const res = {
        provider,
        signer,
        contract,
        account: accounts[0],
        balance: balanceInEth,
        netwrok,
        blockNo
      };
      _ETHER_.set(res);
      return res;
    } else if (_ETHER_.get()) {
      return _ETHER_.get();
    } else {
      return {
        stop: {
          msg: "Please install MetaMask and swithch to anyone of the below newtorks:",
          ids: Array.from(chain_id_map).map(d => d[1])
        }
      };
    }
  } catch (error) {
    // alert("Metamask not present!!");
    console.log(error);
    return {};
  }
};

export default connetWallet;