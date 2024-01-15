const fs = require("fs");

const data = fs.readFile('read.txt','utf-8',(err,data) =>{
    console.log(data);
})

console.log("after read data");

// in output we can see that second line executed first
// because syncronous don't wait for finish task that go-for second task
// when first task executed then come again for first task