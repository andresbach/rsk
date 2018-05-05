//module.exports = function(callback) {
const artifacts = require('./build/contracts/CoinFabrikToken.json')
const contract = require('truffle-contract')
const MyContract = contract(artifacts);
var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

MyContract.setProvider(web3.currentProvider);

var abi = CoinFabrikToken.abi;
var token_add = CoinFabrikToken.address;
var ctoken = web3.eth.contract(abi).at(token_add);
var cuenta = web3.eth.accounts[10];
var cuenta0 = web3.eth.accounts[0];
//}
