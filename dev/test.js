const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2989, "11111", "22222");
bitcoin.createNewBlock(2990, "22222", "33333");
bitcoin.createNewBlock(2991, "33333", "44444");

console.log(bitcoin);
