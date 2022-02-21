const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "0x2ff207ce70e21a4e26617f0e8ec5eebee2e2a31328bf01d75095f9a14a6996b7";
const rpc_url = "https://bsc-dataseed.binance.org/";
const test_rpc_url = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const bscscan_key = "7UC2KJG6RKRRC63P2FIU65I8Z71J36HDZ5";


module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: bscscan_key
  },
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, rpc_url),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 10000000
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, test_rpc_url),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 10000000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.11",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1000
        },
        // evmVersion: "byzantium"
      }
    }
  }
}