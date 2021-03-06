const mnemonic =
  "journey elbow brown mountain zoo miss human craft climb appear silent easily card group used";
const HDWalletProvider = require("truffle-hdwallet-provider");

require("babel-register");
require("babel-polyfill");

module.exports = {
  build: "npm run dev",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
      network_id: 3,
    },
  },
};
