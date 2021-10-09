var express = require('express')();
var bodyParser = require('body-parser');
var app = express;
//var router = express.router();

app.get('/', (reg,res)=>{
    res.end('Default Page');
});

// Fix Path
app.get('/apt/add', (req, res)=>{
    res.end('/apt/add');
});

// PathRegx
// ? = option
// ex: /abcd or /acd
app.get('/ab?cd', (req, res)=>{
    res.end('/ab?cd');
});


var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);
});