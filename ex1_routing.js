var express = require('express')();
var app = express;


app.get('/', function(req, res){
    res.json({res:  'hello world'});
});

app.get('/show',function(req,res){
    res.json({res:   'Show Show'});
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s",host,port);
});