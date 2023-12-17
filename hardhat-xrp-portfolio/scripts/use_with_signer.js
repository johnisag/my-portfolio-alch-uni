const hre = require("hardhat");

const contractAddress = "0x29BBF5f4f19F7F782a26b51Ae22573B29a9e8C4e";
const contractName = "Portfolio";

function inform_sleeping() {
  console.log("I am sleeping...");
}

async function main() {
  const url = process.env.XRP_EVM_DEV_URL;
  const pk = process.env.PRIVATE_KEY;

  let provider = new ethers.getDefaultProvider(url);
  let walletWithProvider = new ethers.Wallet(pk, provider);

  // attach to the mycontract
  const contract = await hre.ethers.getContractAt(
    contractName,
    contractAddress,
    walletWithProvider
  );

  // call contract functions
  await contract.updateAsset("BTC", ethers.parseEther("1"));
  await contract.updateAsset("LINK", ethers.parseEther("102"));

  // sleep 6 seconds for our transaction to be executed with block generation
  // if we do not wait, the getPortfolio() funciton will get the current blockchain state
  // which does have our changes
  setTimeout(inform_sleeping, 6000);

  // get portfolio
  let portfolio = await contract.getPortfolio();

  console.log("Portfolio: ", portfolio);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
