const {BlockChain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('386fa45f85e14c5773db7ac64cab5a1664d05fa1a6c1691e1a2ff8bc1489ddf4');
const myWalletAddress = myKey.getPublic('hex');

let stevenCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'miner_address', 10);
tx1.signTransaction(myKey);
stevenCoin.addTransaction(tx1);

console.log("\n Starting to mine...");
stevenCoin.minePendingTransactions(myWalletAddress);

console.log("\n Balance of miner is ", stevenCoin.getBlanceOfAddress("miner_address"));
console.log("\n Balance of myWalletAddress is ", stevenCoin.getBlanceOfAddress(myWalletAddress));

stevenCoin.chain[1].transactions[0].amount = 2;

console.log('Is the chain valid?', stevenCoin.isChainValid());
