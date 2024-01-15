// asynchronous needs callback function
const fs = require("fs");

// write data in file
fs.writeFile('read.txt',"today is awesome day", (err)=>{
    console.log("file is created");
    console.log(err);
});

// append data in file
fs.appendFile('read.txt',' for NodeJs', (err) => {
    console.log("added successfully!");
})

// read data from file
fs.readFile('read.txt','utf-8' ,(err,data) =>{
    console.log(data);
} )
