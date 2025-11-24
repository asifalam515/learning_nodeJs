const fs = require('fs')
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
ourReadStream.on('data',(data)=>{
console.log(data.toString());
})
console.log('hello');