var CoinFabrikToken = artifacts.require("./CoinFabrikToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CoinFabrikToken);
};
