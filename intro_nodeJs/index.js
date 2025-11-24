const fs = require('fs')
fs.writeFileSync('myfile.txt',"hello programmers ")
fs.appendFileSync('myfile.txt',"how are you?")
 fs.readFile("myfile.txt",(err,data)=>{
    console.log(data.toString());

}) //we will get buffer
console.log('hello');