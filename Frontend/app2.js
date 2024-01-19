window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.error('Please install MetaMask or use an Ethereum-enabled browser.');
        return;
    }

    const contractAddress = '0x4fcb2454Adcd503720a8c91fdE68f8737C44eB92'; // Replace with the contract address
    const contractABI = [
        {
            "inputs": [],
            "name": "receiveData",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_data",
                    "type": "string"
                }
            ],
            "name": "sendData",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "data",
            "outputs": [
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
            "inputs": [],
            "name": "receivedData",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const recipientAddress = web3.eth.accounts[0]; // Recipient's MetaMask address
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Fetch received data or transactions
    try {
        const receivedData = await contract.methods.receivedData().call();
        console.log(receivedData);
        document.getElementById('receivedData').textContent = `Received Data: ${receivedData}`;
    } catch (error) {
        console.error('Error fetching received data:', error);
    }
});
