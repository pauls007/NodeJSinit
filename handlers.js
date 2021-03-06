var express = require('express');
var app = express();

app.get('/example/a', function(req,res){
    res.end('/example/a');
});

app.get('/example/b', function(req, res, next){
    res.write("1:, ");
    next();
}, function(req, res, next){
    if(req.query.password == "1234"){
        res.write("2:, ");
        next();
    }else{
        res.end("2:, ");
    }

}, function(req, res){
    res.end("3: ");
//    next();
});

var f1 = function(req, res, next){
    console.log("f1");
    req.pass="f1";
    next();
};

var f2 = function(req, res, next){
    console.log("f2");
    req.pass= req.pass + ", f2";
    next();
};

var f3 = function(req, res, next){
    console.log("f3");
    req.pass= req.pass + ", f3";
    next();
};

app.get('/example/c', f1, f2, f3, function(req,res){
    res.json({result: '/example/array', pass: req.pass})
});

var Server = app.listen(3000, function(){
    var host = Server.address().address;
    var port = Server.address().port;
    console.log("listen at http://%s%s",host,port);
});