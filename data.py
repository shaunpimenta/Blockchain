from web3 import Web3

# Connect to a local Geth node
w3 = Web3(Web3.HTTPProvider('http://localhost:8545'))

# Replace with your actual contract address and ABI
contract_address = '0x3732c99c4Dde6fC6748D14b9B67307EfFC8b1Bd8'
contract_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getMessage",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getMessageCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "messages",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]  # Put your contract ABI here

# Replace with your private key
private_key = '2a43729955c0621a259a8c1a0011df227fd2475e45bd11909ebea7631c5f3694'

# Create a contract object
contract = w3.eth.contract(address=contract_address, abi=contract_abi)

# Replace 'Hello, Ethereum!' with the string you want to send
# string_to_send = input("Enter String : ")
string_to_send="Hello World "
# w3.eth.account. ("2a43729955c0621a259a8c1a0011df227fd2475e45bd11909ebea7631c5f3694")
# Send the string to the smart contract
transaction = contract.functions.sendMessage(string_to_send).build_transaction({
    'from': w3.eth.account,
    'gas': 200000,
    'gasPrice': w3.to_wei('50', 'gwei'),
    # 'nonce': w3.eth.get_transaction_count(w3.eth.account),
})
# w3.eth.default_account ="0x38adFb8C56BeA6e91602D77658c336834f20B228"
signed_transaction = w3.eth.account.sign_transaction(transaction, private_key)
# print("Message Sent")
# transaction_hash = w3.eth.send_raw_transaction(signed_transaction.raw_transaction)

# print("Transaction Hash:", transaction_hash.hex())
print(w3.eth.accounts)