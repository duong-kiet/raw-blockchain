const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2989, "11111", "22222");
bitcoin.createNewTransaction(100, "ASKD", "FHJK");
bitcoin.createNewBlock(2991, "33333", "44444");
bitcoin.createNewTransaction(200, "FSKD", "YUIT");

console.log(bitcoin);
