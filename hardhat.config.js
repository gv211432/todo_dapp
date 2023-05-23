require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SAPOLIA_URI = process.env.SAPOLIA_URI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sapolia: {
      url: SAPOLIA_URI,
      accounts: [PRIVATE_KEY]
    }
  }
};
