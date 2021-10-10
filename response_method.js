var express = require('express');
var path = require('path');
var app = express();

app.get('/download', function(req,res){
    res.download(path.join(__dirname,'/public/images/download.png'));
});

app.get('/send', function(req,res){
    res.send("Send was called");
});

app.get('/redirect', function(req,res){
    //res.redirect('http://facebook.com');
    res.redirect('/send');
});

var server = app.listen(3000,function(){
    var host =server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});