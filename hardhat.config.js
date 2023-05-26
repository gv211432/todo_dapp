require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SAPOLIA_URI = process.env.SAPOLIA_URI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_URI = process.env.MUMBAI_URI;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sapolia: {
      url: SAPOLIA_URI,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: MUMBAI_URI,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
  }
};
