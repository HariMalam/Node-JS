const fs = require('fs');

const biodata = {
    name: "hari",
    age: 20,
};

// console.log(biodata)
// const jsondata = JSON.stringify(biodata);
// console.log(jsondata);

// const objdata = JSON.parse(jsondata);
// console.log(objdata)


const jsonData = JSON.stringify(biodata);
fs.writeFile('json1.json', jsonData, (err) => {
    console.log("done");
})

const jsonReadData = fs.readFile("json1.json",'utf-8',(err,data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})
