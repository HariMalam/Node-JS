const fs = require("fs");

fs.writeFileSync('read.txt',"this is text file"); // write on file
fs.writeFileSync('read.txt',"this is text file again"); // overwrite on file

fs.appendFileSync('read.txt',"wow!") // append on file

// data read in buffer data
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

// convert buffer data to string
const org_data = buf_data.toString();
console.log(org_data);

// rename file
fs.renameSync('read.txt','newname.txt');

