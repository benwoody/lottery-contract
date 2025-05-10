require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const MAINNET_API_URL =
    process.env.MAINNET_API_URL ||
    process.env.ALCHEMY_MAINNET_RPC_URL ||
    "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const ALCHEMY_API_URL =
    process.env.ALCHEMY_API_URL || "https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"

module.exports = {
  networks: {
    sepolia: {
      url: ALCHEMY_API_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
    mainnet: {
      url: MAINNET_API_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    }
  },
  solidity: "0.8.19",
};
