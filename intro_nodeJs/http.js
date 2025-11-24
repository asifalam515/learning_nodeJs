const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
    res.write('Hello Programmers!')
    res.end()
    }
    else if(req.url ==='/about'){
        res.write("this is about us page")
        res.end()
    }


})


server.listen(3000)
