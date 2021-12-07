const main = async () => {
  const contractFactory = await ethers.getContractFactory('Vault');
  var contract = await contractFactory.attach(
    '0xe53920F051A82617a960bA02Bc274eF539bc24eE'
  );
  const network = 'rinkeby';
  const provider = await ethers.getDefaultProvider(network, {
    alchemy:
      process.env.RINKEBY_URL,
  });
  const pwd = await provider.getStorageAt(contract.address, 1);
  var txn = await contract.unlock(pwd);
  await txn.wait();
  txn = await contract.locked();
  console.log(txn);
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
