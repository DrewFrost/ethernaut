const main = async () => {
  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory('Fallout');
  const contract = await contractFactory.attach(
    '0x7692004D956fD27B88097D75FDECB70b3EC849BE'
  );
  let txn = await contract.connect(signer).Fal1out();
  txn.wait(); 
  await contract.connect(signer).collectAllocations();

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
