const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freememInByte = os.freemem();
console.log(freememInByte);
const memInGB = freememInByte / 1024 / 1024 / 1024;
console.log(memInGB);
const totalmemInByte = os.totalmem();
console.log(totalmemInByte);
const totalmemInGB = totalmemInByte / 1024 / 1024 / 1024;
console.log(totalmemInGB);