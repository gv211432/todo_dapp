const hre = require("hardhat");

async function main() {
  const todoList = await hre.ethers.getContractFactory("TodoLists");
  const contract = todoList.deploy();
  console.log("Address of contract: ", (await contract).address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
