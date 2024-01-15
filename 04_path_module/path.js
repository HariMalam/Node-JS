const path = require('path');

console.log(path.dirname('04_path_module/path.js'));
console.log(path.extname('04_path_module/path.js'));
console.log(path.basename('04_path_module/path.js'));

const mypath = path.parse('04_path_module/path.js');

console.log(mypath.name);
console.log(mypath.ext);

