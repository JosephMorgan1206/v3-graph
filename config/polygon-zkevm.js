const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "mainnet",
  wNativeAddress: WETH,
  v3: {
    wNativeStablePoolAddress: "0xcf9b1DDa37D222029eF3476ef436F238F1112C44",
    stableIsToken0: false,
    factoryAddress: "0x0063cF53eC20e51c2A9B21ce3FB80023Ae948779",
    startBlock: 585266,
    stableCoins: [
      "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4", // DAI
      "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035", // USDC
      "0x1E4a5963aBFD975d8c9021ce480b42188849D41d", // USDT
    ],
    whitelistAddresses: [
      WETH,
      "0xC5015b9d9161Dca7e18e32f6f25C4aD850731Fd4", // DAI
      "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035", // USDC
      "0x1E4a5963aBFD975d8c9021ce480b42188849D41d", // USDT
    ],
    nonfungiblePositionManagerAddress: "0xb9b49c66c53AE0bbD1c07B82b6384ad33A3060c9",
    nonfungiblePositionManagerStartBlock: 585292,
    minETHLocked: 5,
  },
  masterChefV3: {
    masterChefAddress: "0xff5DAdca70E30b0082b67a5cB978Ca6eE54258b5",
    startBlock: 586434,
  },
};
