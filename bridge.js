const ADDRESS = '0x0000000000000000000000000000000001000006';

var abi = [{
  name: 'getBtcBlockchainBestChainHeight',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int'
  }]
}, {
  name: 'getFederationAddress',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'string'
  }]
}, {
  name: 'getFederationSize',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getFederationThreshold',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getFederatorPublicKey',
  type: 'function',
  constant: true,
  inputs: [{
    name: 'index',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'bytes'
  }]
}, {
  name: 'getFederationCreationTime',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getFederationCreationBlockNumber',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getRetiringFederationAddress',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'string'
  }]
}, {
  name: 'getRetiringFederationSize',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getRetiringFederationThreshold',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getRetiringFederatorPublicKey',
  type: 'function',
  constant: true,
  inputs: [{
    name: 'index',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'bytes'
  }]
}, {
  name: 'getRetiringFederationCreationTime',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getRetiringFederationCreationBlockNumber',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'createFederation',
  type: 'function',
  constant: false,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'addFederatorPublicKey',
  type: 'function',
  constant: false,
  inputs: [{
    name: 'key',
    type: 'bytes'
  }],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'commitFederation',
  type: 'function',
  constant: false,
  inputs: [{
    name: 'hash',
    type: 'bytes'
  }],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'rollbackFederation',
  type: 'function',
  constant: false,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getPendingFederationHash',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'bytes'
  }]
}, {
  name: 'getPendingFederationSize',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getPendingFederatorPublicKey',
  type: 'function',
  constant: true,
  inputs: [{
    name: 'index',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'bytes'
  }]
}, {
  name: 'getLockWhitelistSize',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getLockWhitelistAddress',
  type: 'function',
  constant: true,
  inputs: [{
    name: 'index',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'string'
  }]
}, {
  name: 'addLockWhitelistAddress',
  type: 'function',
  constant: false,
  inputs: [{
    name: 'address',
    type: 'string'
  },{
    name: 'maxTransferValue',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'removeLockWhitelistAddress',
  type: 'function',
  constant: false,
  inputs: [{
    name: 'address',
    type: 'string'
  }],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'setLockWhitelistDisableBlockDelay',
  type: 'function',
  constant: false,
  inputs: [{
    name: 'disableDelay',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'getFeePerKb',
  type: 'function',
  constant: true,
  inputs: [],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}, {
  name: 'voteFeePerKbChange',
  type: 'function',
  constant: false,
  inputs: [{
    name: 'feePerKb',
    type: 'int256'
  }],
  outputs: [{
    name: '',
    type: 'int256'
  }]
}];

var buildBrige = function(client) {
  return new client.eth.Contract(abi, ADDRESS);
};

module.exports = {
  abi: abi,
  buildBrige: buildBrige,
  ADDRESS: ADDRESS
}
