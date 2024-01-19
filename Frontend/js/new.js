window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.error('Please install MetaMask or use an Ethereum-enabled browser.');
        return;
    }

    const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_data",
                    "type": "string"
                }
            ],
            "name": "receiveData",
            "outputs": [],
            "stateMutability": "nonpayable",
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
    const senderAddress = '0x23ec7D9851043098D578a50EdCBb7060d4Bb00f2'; // Sender's MetaMask address
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    document.getElementById('sendDataButton').addEventListener('click', async () => {
        const recipientAddress = document.getElementById('recipientAddress').value;
        const data = document.getElementById('dataInput').value;

        try {
            const result = await contract.methods.sendData(recipientAddress, data).send({ from: senderAddress });
            console.log('Data sent:', result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    });
});
