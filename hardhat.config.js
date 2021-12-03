require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: '0.6.4',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};
