window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        // Request account access from the user
        await window.ethereum.send('eth_requestAccounts');

        // Check if the user granted account access
        const accounts = await window.ethereum.send('eth_accounts');
        if (accounts.length === 0) {
            console.error('User denied account access.');
            return;
        }
    } else {
        // Handle the case where the user doesn't have MetaMask
        console.error('Please install MetaMask.');
        return;
    }

    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Replace with your contract address
    const contractABI = [
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
        }
    ];
    const senderAddress = '0x07b073Dcd816c4E86e8EcD6d9c07aF0189BdFA9B'; // Use the u    ser's MetaMask address
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    document.getElementById('sendDataButton').addEventListener('click', async () => {
        const receiverAddress = document.getElementById('receiverAddress').value;
        const data = document.getElementById('dataInput').value;

        try {
            const result = await contract.methods.sendData(receiverAddress, data).send({ from: senderAddress });
            console.log('Data sent:', result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    });
});
