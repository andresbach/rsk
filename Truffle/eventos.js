module.exports = function(callback) {

  const MyContract = artifacts.require("../contracts/MyContract.sol");

  const displayEther = (wei) => web3.fromWei(wei, "ether").toNumber();

  const displayFunctions = {
    "B": {
      "value": displayEther
    }
    "C": {
      "value": displayEther,
      "USD": ((USD) => "$" + USD)
    }
  };

  let contract;
  let events;
  MyContract.deployed().then(function(instance) {
    contract = instance;

    events = contract.allEvents();
    events.watch(function(error, result) {
      if(error) {
        console.log("Error");
      }
      else {
        console.log(result.event + ": ");
        for(key in result.args) {
          if(result.event in displayFunctions && key in displayFunctions[result.event]) {
            console.log("- " + key + ": " + displayFunctions[result.event][key].call(this, result.args[key]));
          }
          else {
            console.log("- " + key + ": " + result.args[key]);
          }
        }
      }
    })
    .then(function() {
      // Do more with your contract here.
    });
};
