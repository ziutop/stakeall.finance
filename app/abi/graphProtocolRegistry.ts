export const graphProtocolAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_indexer",
                "type": "address"
            },
            {
                "name": "_tokens",
                "type": "uint256"
            }
        ],
        "name": "delegate",
        "outputs": [
            {
                "name": "shares_",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "graphProxy",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_indexer",
                "type": "address"
            },
            {
                "name": "_shares",
                "type": "uint256"
            }
        ],
        "name": "undelegate",
        "outputs": [
            {
                "name": "tokens_",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_indexer",
                "type": "address"
            },
            {
                "name": "_delegateToIndexer",
                "type": "address"
            }
        ],
        "name": "withdrawDelegated",
        "outputs": [
            {
                "name": "tokens_",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "grtTokenAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_graphProxy",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_grtTokenAddress",
                "type": "address"
            }
        ],
        "name": "LogDelegate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_indexer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_share",
                "type": "uint256"
            }
        ],
        "name": "GraphProtocolDelegated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_indexer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_share",
                "type": "uint256"
            }
        ],
        "name": "GraphProtocolUnDelegated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_indexer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_delegateToIndexer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_tokens",
                "type": "uint256"
            }
        ],
        "name": "GraphProtocolWithdrawDelegated",
        "type": "event"
    }
]