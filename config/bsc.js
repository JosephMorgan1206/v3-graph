/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "bsc",
  wNativeAddress: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  v3: {
    // WBNB-USDT 500
    wNativeStablePoolAddress: "0x1bAcCFfdA7E4f89F2A39882732e31128009Cd8d6",
    stableIsToken0: true,
    factoryAddress: "0x482DdCADc0619BDB80e92278b2dd7D49b199bF2E",
    startBlock: 28674886,
    stableCoins: [
      "0x55d398326f99059fF775485246999027B3197955", // USDT
      "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
    ],
    whitelistAddresses: [
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
      "0x55d398326f99059ff775485246999027b3197955", // USDT
      "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDC
      "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", // BTCB
      "0x2170ed0880ac9a755fd29b2688956bd959f933f8", // WETH
      "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", // CAKE
    ],
    nonfungiblePositionManagerAddress: "0x29c66B87Fb3B3FEf0554963130Cb8aeD12Eb87C5",
    nonfungiblePositionManagerStartBlock: 28674899,
    minETHLocked: 10,
  },
  masterChefV3: {
    masterChefAddress: "0x4b7D3120fcb0009Cb341d29eC0773A58d5ac4A67",
    startBlock: 28675209,
  },
};
