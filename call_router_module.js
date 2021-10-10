var express = require('express');
var router = require('./export_route');
var app = express();

app.use('/home',function(req,res){
    res.end("Home");
});

//เป็นการเรียกโดยต้องมี /api/.....
app.use('/api', router);

var server = app.listen(3000,function(){
    var host =server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});