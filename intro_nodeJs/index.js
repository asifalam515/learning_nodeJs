const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
   res.write(`
<html> 
<head>
  <title>Form</title>
</head>
<body>
  <form method="post" action="/process">
    <textarea name="message"></textarea>
  </form>
</body>
</html>
`);

    res.end()
    }
    else if(req.url ==='/process' && req.method ==='POST'){
        console.log(req.data);
        res.write("this is about us page")
        res.end()
    }
    else{
        res.write("Not Found")
        res.end()
    }


})


server.listen(3000)
console.log("listening on port 3000");
