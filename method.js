var express = require('express')();
var bodyParser = require('body-parser');
var app = express;


app.all('/secured/*', (req, res, next)=>{
    console.log('Acess the secret section');
//    res.write('You must to Login \n');
//    next();
    if(req.query.username =="admin"){
        next();
    }else{
        res.end('You must to Login \n');
    }
});

app.get('/', (req, res)=>{
    res.end("First Page")
});

app.get('/secured/profile', (req, res)=>{
    res.end('Profile Page');
});
 
app.get('/secured/inbox', (req, res)=>{
    res.end('Inbox Page');
});

var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);
});