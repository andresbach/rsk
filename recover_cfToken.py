#!/usr/bin/env python3

# exec(open("deploy_cfToken.py").read())


exec(open("../Setups/rsk.py").read())

acc0 = web3.eth.accounts[0]
acc1 = web3.eth.accounts[1]

# este lo uso para mandar desde el creador
txargs0 = {"from": acc0, "gasPrice": 0, "gas": 4000000}
# este lo uso para mandar desde el user
txargs1 = {"from": acc1, "gasPrice": 0, "gas": 4000000}

with open("../Contratos/Compilado/CoinFabrikToken.abi") as contract_abi_file:
  contract_abi = json.load(contract_abi_file)
with open("../Contratos/Compilado/CoinFabrikToken.bin") as contract_bin_file:
  contract_bytecode = '0x' + contract_bin_file.read()

# este solo construye la instancia, pero no deploya
cfToken = web3.eth.contract(abi=contract_abi, bytecode=contract_bytecode)
# este es el que deploya desde acc0
tx_hash = cfToken.constructor().transact(transaction=txargs0)

# esta predice donde va a estar el contrato
contract_address = generate_contract_address(acc0, web3.eth.getTransaction(tx_hash).nonce)

# Una vez que calcule la direccion del contrato, se la asigno a la instancia
cfToken = web3.eth.contract(address = contract_address, abi = contract_abi, bytecode = contract_bytecode)

print("Deployment hash:", tx_hash.hex())
print("Deployment address:", cfToken.address)
print("Please wait for the contract to be mined...")
# Esto hace que espere a ser minado y le asigna a ticket los valores del recibo
ticket = web3.eth.waitForTransactionReceipt(tx_hash.hex());
