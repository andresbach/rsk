const Web3 = require('web3')
const Tx = require('ethereumjs-tx')

// connect to Infura node
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/INFURA_KEY'))

// the address that will send the test transaction
const addressFrom = ''
const privKey = 'PRIVATE_KEY'

// the destination address
const addressTo = ''

// Signs the given transaction data and sends it. Abstracts some of the details 
// of buffering and serializing the transaction for web3.
function sendSigned(txData, cb) {
  const privateKey = new Buffer(config.privKey, 'hex')
  const transaction = new Tx(txData)
  transaction.sign(privateKey)
  const serializedTx = transaction.serialize().toString('hex')
  web3.eth.sendSignedTransaction('0x' + serializedTx, cb)
}

// get the number of transactions sent so far so we can create a fresh nonce
web3.eth.getTransactionCount(addressFrom).then(txCount => {

  // construct the transaction data
  const txData = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(25000),
    gasPrice: web3.utils.toHex(10e9), // 10 Gwei
    to: addressTo,
    from: addressFrom,
    value: web3.utils.toHex(web3.utils.toWei(123, 'wei'))
  }

  // fire away!
  sendSigned(txData, function(err, result) {
    if (err) return console.log('error', err)
    console.log('sent', result)
  })

})
