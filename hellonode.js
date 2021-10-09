var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hello world');    
}).listen(8081);
console.log("Server running at http://localhost:8081")