const fs = require('fs');

// create new folder
fs.mkdirSync('01_fs_modules/hari');

// create file in folder
fs.writeFileSync('01_fs_modules/hari/bio.txt',"name: malam hari");

// append data in file
fs.appendFileSync('01_fs_modules/hari/bio.txt'," devshibhai");

// read data without buffer
const data = fs.readFileSync('01_fs_modules/hari/bio.txt', 'utf-8');
console.log(data)

// reaname file 
fs.renameSync('01_fs_modules/hari/bio.txt','01_fs_modules/hari/about.txt');

// delete file
fs.unlinkSync("01_fs_modules/hari/about.txt");

// delete folder
fs.rmdirSync("01_fs_modules/hari");